# ARCHITECTURE — ClonerNews

## Stack

- **HTML / CSS / Vanilla JavaScript** — χωρίς frameworks
- **HackerNews Firebase API** — πηγή δεδομένων
- **Fetch API** — για τα HTTP requests

---

## File Tree

```
clonernews/
├── index.html              # Η μοναδική σελίδα της εφαρμογής (SPA)
│
├── css/
│   ├── reset.css           # Μηδενισμός default στυλ του browser
│   ├── main.css            # Γενικό layout και typography
│   ├── feed.css            # Στυλ για τη λίστα posts
│   ├── post.css            # Στυλ για κάρτα post
│   ├── comments.css        # Στυλ για τα comments
│   └── live.css            # Στυλ για το live section
│
├── js/
│   ├── api/
│   │   ├── client.js       # Base fetch function (url → json)
│   │   ├── items.js        # getItem(id), getItems(ids)
│   │   ├── stories.js      # getNewStories(), getTopStories()
│   │   ├── jobs.js         # getJobStories()
│   │   ├── polls.js        # getPollStories()
│   │   └── live.js         # getMaxItem(), getUpdates()
│   │
│   ├── components/
│   │   ├── Feed.js         # Renders τη λίστα με τα posts
│   │   ├── PostCard.js     # Renders ένα post (story/job/poll)
│   │   ├── Comments.js     # Renders τα comments ενός post
│   │   ├── Comment.js      # Renders ένα μεμονωμένο comment
│   │   └── LiveSection.js  # Renders το live updates section
│   │
│   ├── utils/
│   │   ├── throttle.js     # Throttle function για τα API calls
│   │   ├── debounce.js     # Debounce function για scroll events
│   │   └── time.js         # Μετατροπή Unix timestamp → "2 hours ago"
│   │
│   └── main.js             # Entry point — ξεκινάει την εφαρμογή
│
└── assets/
    └── favicon.ico
```

---

## Αρχιτεκτονική σε λόγια

Η εφαρμογή είναι **Single Page Application (SPA)** — υπάρχει μόνο ένα `index.html` και όλα τα υπόλοιπα φορτώνονται δυναμικά με JavaScript.

```
index.html
    │
    └── main.js                  ← ξεκινάει όλα
         ├── api/                ← επικοινωνία με το API
         │    └── επιστρέφει δεδομένα (JSON)
         │
         ├── components/         ← παίρνει τα δεδομένα και φτιάχνει HTML
         │    └── εμφανίζει στον browser
         │
         └── utils/              ← βοηθητικά εργαλεία
```

---

## Ροή δεδομένων

```
1. main.js ξεκινάει
2. stories.js → παίρνει IDs από το API
3. items.js   → παίρνει τα πρώτα 20 posts (lazy)
4. Feed.js    → τα εμφανίζει στη σελίδα
5. User κάνει scroll / click "Load More"
6. items.js   → παίρνει τα επόμενα 20 posts
7. Feed.js    → τα προσθέτει στη λίστα

Ταυτόχρονα:
8. live.js    → κάθε 5 δευτερόλεπτα ελέγχει για νέο περιεχόμενο
9. LiveSection.js → ενημερώνει το live section
```

---

## Κανόνες

- Κάθε αρχείο κάνει **ένα μόνο πράγμα** — δεν ανακατεύουμε API calls με HTML
- Τα `components/` **δεν** μιλάνε απευθείας με το API — πηγαίνουν μέσω `api/`
- Τα `utils/` δεν ξέρουν τίποτα για το HackerNews — είναι γενικά εργαλεία
