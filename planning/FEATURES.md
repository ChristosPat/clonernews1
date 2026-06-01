# FEATURES — ClonerNews

## Feature 1 — Post Feed

### Τι κάνει
Εμφανίζει μια λίστα από posts (stories, jobs, polls) φερμένα από το HackerNews API.

### Πώς λειτουργεί
1. Κατά το άνοιγμα της εφαρμογής, καλείται το `/newstories.json`
2. Επιστρέφει μια λίστα από IDs (έως 500)
3. Φορτώνουμε **μόνο τα πρώτα 20** με `/item/{id}.json`
4. Τα εμφανίζουμε ταξινομημένα από **νεότερο προς παλαιότερο**

### Κάθε post δείχνει
- Τίτλο (με link αν είναι story)
- Συγγραφέα (`by`)
- Score
- Ώρα δημοσίευσης (π.χ. "3 hours ago")
- Αριθμό comments (`descendants`)
- Τύπο: Story / Job / Poll

### Αρχεία που αφορά
- `js/api/stories.js`, `js/api/jobs.js`, `js/api/polls.js`
- `js/api/items.js`
- `js/components/Feed.js`
- `js/components/PostCard.js`

---

## Feature 2 — Lazy Loading

### Τι κάνει
Φορτώνει περισσότερα posts μόνο όταν ο χρήστης το ζητήσει — όχι όλα μαζί.

### Πώς λειτουργεί
1. Κρατάμε μια λίστα με **όλα τα IDs** από το API
2. Έχουμε έναν δείκτη `offset` που ξεκινάει στο 0
3. Κάθε φορά που ο χρήστης κάνει scroll στο κάτω μέρος ή πατάει "Load More":
   - Παίρνουμε τα επόμενα 20 IDs (`offset` → `offset + 20`)
   - Τα φορτώνουμε από το API
   - Τα προσθέτουμε στη λίστα
   - Αυξάνουμε το `offset` κατά 20

### Σημαντικό
- Το scroll event πρέπει να χρησιμοποιεί **debounce** ώστε να μην καλείται 100 φορές το δευτερόλεπτο
- Αν δεν υπάρχουν άλλα posts, κρύβουμε το "Load More"

### Αρχεία που αφορά
- `js/components/Feed.js`
- `js/utils/debounce.js`

---

## Feature 3 — Comments

### Τι κάνει
Εμφανίζει τα comments ενός post όταν ο χρήστης το επιλέξει.

### Πώς λειτουργεί
1. Ο χρήστης κάνει click σε ένα post
2. Φορτώνουμε τα IDs των comments από το πεδίο `kids` του post
3. Για κάθε ID καλούμε `/item/{id}.json`
4. Εμφανίζουμε τα comments ταξινομημένα **νεότερο προς παλαιότερο**
5. Κάθε comment δείχνει: συγγραφέα, κείμενο, ώρα

### Optional — Nested Comments
- Κάθε comment μπορεί να έχει δικά του `kids`
- Τα φορτώνουμε αναδρομικά και τα εμφανίζουμε με **εσοχή** (indent)
- Έτσι φαίνεται ποιος απάντησε σε ποιον

```
Comment A (γονέας)
    └── Comment B (απάντηση στο A)
            └── Comment C (απάντηση στο B)
```

### Αρχεία που αφορά
- `js/components/Comments.js`
- `js/components/Comment.js`
- `js/api/items.js`

---

## Feature 4 — Live Section

### Τι κάνει
Ένα τμήμα της σελίδας που ενημερώνεται αυτόματα κάθε 5 δευτερόλεπτα με το νεότερο περιεχόμενο.

### Πώς λειτουργεί
1. Κατά την εκκίνηση αποθηκεύουμε το τρέχον `maxitem` από `/maxitem.json`
2. Κάθε 5 δευτερόλεπτα ξαναπαίρνουμε το `maxitem`
3. Αν το νέο `maxitem` > από το παλιό → υπάρχουν **νέα posts**
4. Φορτώνουμε τα νέα items και τα εμφανίζουμε στο live section
5. Ενημερώνουμε το αποθηκευμένο `maxitem`

### Τι δείχνει το live section
- Τίτλος: "Live Updates"
- Λίστα με τα πιο πρόσφατα posts
- Ένδειξη πότε έγινε η τελευταία ενημέρωση (π.χ. "Updated 3 seconds ago")

### Σημαντικό
- Χρησιμοποιούμε `setInterval` για την επανάληψη κάθε 5 δευτερόλεπτα
- Χρησιμοποιούμε **throttle** για να μην γίνουν πολλά requests ταυτόχρονα

### Αρχεία που αφορά
- `js/api/live.js`
- `js/components/LiveSection.js`
- `js/utils/throttle.js`

---

## Feature 5 — Utilities

### time.js
Μετατρέπει Unix timestamp σε ανθρώπινη μορφή:
```
1175714200  →  "17 years ago"
1700000000  →  "2 hours ago"
```

### throttle.js
Περιορίζει πόσο συχνά εκτελείται μια function. Χρήσιμο για τα API calls.
```
fn καλείται max 1 φορά ανά X milliseconds
```

### debounce.js
Περιμένει να σταματήσει μια ενέργεια πριν εκτελέσει τη function. Χρήσιμο για το scroll.
```
fn εκτελείται μόνο αφού περάσουν X milliseconds από την τελευταία κλήση
```
