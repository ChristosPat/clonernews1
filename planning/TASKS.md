# TASKS — ClonerNews

## Μοιρασιά Εργασιών

| # | Εργασία | Άτομο | Status |
| - | ------- | ----- | ------ |
| 1 | Setup project & file structure | Όλοι μαζί | ⬜ |
| 2 | API layer | Άτομο A | ⬜ |
| 3 | Utilities | Άτομο A | ⬜ |
| 4 | Post Feed + Lazy Loading | Άτομο B | ⬜ |
| 5 | Comments | Άτομο B | ⬜ |
| 6 | Live Section | Άτομο C | ⬜ |
| 7 | CSS & Layout | Άτομο C | ⬜ |
| 8 | Testing & Bug fixing | Όλοι μαζί | ⬜ |

---

## Άτομο A — API & Utilities

Υπεύθυνο για όλη την επικοινωνία με το HackerNews API και τα βοηθητικά εργαλεία.

### API Layer

- [ ] `js/api/client.js` — base fetch function που παίρνει URL και επιστρέφει JSON
- [ ] `js/api/items.js` — `getItem(id)` και `getItems(ids)` για να φέρνουμε posts
- [ ] `js/api/stories.js` — `getNewStories()`, `getTopStories()`, `getBestStories()`
- [ ] `js/api/jobs.js` — `getJobStories()`
- [ ] `js/api/polls.js` — `getPollStories()`
- [ ] `js/api/live.js` — `getMaxItem()` και `getUpdates()`

### Utilities

- [ ] `js/utils/time.js` — μετατροπή Unix timestamp → "2 hours ago"
- [ ] `js/utils/throttle.js` — throttle function
- [ ] `js/utils/debounce.js` — debounce function

---

## Άτομο B — Post Feed & Comments

Υπεύθυνο για την εμφάνιση των posts και των comments.

### Post Feed

- [ ] `js/components/PostCard.js` — renders μία κάρτα post (τίτλος, συγγραφέας, score, ώρα, αριθμός comments)
- [ ] `js/components/Feed.js` — renders τη λίστα από PostCards
- [ ] Υλοποίηση lazy loading με `offset` (20 posts κάθε φορά)
- [ ] "Load More" button ή scroll event με debounce

### Comments

- [ ] `js/components/Comment.js` — renders ένα μεμονωμένο comment
- [ ] `js/components/Comments.js` — renders όλα τα comments ενός post
- [ ] Click σε post → φόρτωση και εμφάνιση comments
- [ ] **Optional:** nested comments με εσοχή (indent)

---

## Άτομο C — Live Section & CSS

Υπεύθυνο για το live section και ολόκληρο το στυλ της εφαρμογής.

### Live Section

- [ ] `js/components/LiveSection.js` — renders το live updates section
- [ ] `setInterval` κάθε 5 δευτερόλεπτα → ελέγχει `/maxitem.json`
- [ ] Σύγκριση νέου vs παλιού maxitem → αν υπάρχουν νέα, τα φορτώνει και τα εμφανίζει
- [ ] Ένδειξη "Updated X seconds ago"
- [ ] Throttle στα API calls του live section

### CSS & Layout

- [ ] `css/reset.css` — μηδενισμός default στυλ browser
- [ ] `css/main.css` — γενικό layout, χρώματα, typography
- [ ] `css/feed.css` — στυλ για τη λίστα posts
- [ ] `css/post.css` — στυλ για κάρτα post
- [ ] `css/comments.css` — στυλ για τα comments
- [ ] `css/live.css` — στυλ για το live section
- [ ] Responsive design (mobile + desktop)

---

## Όλοι Μαζί

### Αρχή (πριν χωριστεί η δουλειά)

- [ ] Δημιουργία του file tree (φακέλοι και κενά αρχεία)
- [ ] `index.html` — βασική δομή σελίδας
- [ ] `js/main.js` — entry point που συνδέει όλα τα components
- [ ] Συμφωνία για naming conventions (πώς ονομάζουμε variables, functions κλπ.)

### Τέλος (πριν το παραδώσουμε)

- [ ] Cross-testing — ο καθένας δοκιμάζει τη δουλειά του άλλου
- [ ] Bug fixing
- [ ] Έλεγχος ότι δεν γίνονται περιττά API calls
- [ ] Τελικό review του κώδικα

---

## Legend

| Σύμβολο | Σημασία |
| ------- | ------- |
| ⬜ | Δεν έχει ξεκινήσει |
| 🔄 | Σε εξέλιξη |
| ✅ | Ολοκληρώθηκε |
