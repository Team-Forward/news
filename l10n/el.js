OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Το αίτημα απέτυχε, η σύνδεση στο δίκτυο δεν είναι διαθέσιμη!",
    "Request unauthorized. Are you logged in?" : "Το αίτημα δεν είναι εξουσιοδοτημένο. Είστε συνδεδεμένοι;",
    "Request forbidden. Are you an admin?" : "Το αίτημα δεν επιτράπει. Είστε διαχειριστής;",
    "Token expired or app not enabled! Reload the page!" : "Η διαδικασία αναγνώρισης τερματίστηκε ή η εφαρμογή δεν είναι ενεργοποιημένη! Επαναφορτώστε τη σελίδα! ",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Εσωτερικό σφάλμα διακομιστή! Παρακαλώ ελέγξτε το αρχείο data/nextcloud.log για περισσότερες πληροφορίες!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Αποτυχία αιτήματος, το Nextcloud είναι προσωρινά σε κατάσταση συντήρησης!",
    "Can not add feed: Unable to parse feed" : "Αδυναμία προσθήκης ροής: Δεν μπορεί να αναλυθεί",
    "Can not add feed: Exists already" : "Αδυναμία προσθήκης ροής: Υπάρχει ήδη",
    "Articles without feed" : "Άρθρα χωρίς ροές",
    "Can not add folder: Exists already" : "Αδυναμία προσθήκης φακέλου: Υπάρχει ήδη",
    "News" : "Νέα",
    "An RSS/Atom feed reader" : "Τροφοδότης ροής RSS/Atom",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "Η εφαρμογή \"Νέα\" είναι ένας αναγνώστης ροής RSS / Atom για το Nextcloud, ο οποίος μπορεί να συγχρονιστεί με πολλές κινητές συσκευές. Μια λίστα με όλες τις εφαρμογές και απαιτήσεις μπορεί να βρεθεί [στο README] (https://github.com/nextcloud/news)\n\nΠριν ενημερώσετε σε μια νέα έκδοση, [ελέγξτε τον changelog] (https://github.com/nextcloud/news/blob/master/CHANGELOG.md) για να αποφύγετε τις εκπλήξεις.\n\n** Σημαντικό **: Για να ενεργοποιήσετε τις ενημερώσεις ροών, θα χρειαστεί να ενεργοποιήσετε το [Nextcloud system cron] (https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) ή να χρησιμοποιήσετε [ updater] (https://github.com/nextcloud/news-updater) που χρησιμοποιεί το ενσωματωμένο API ενημέρωσης και απενεργοποιεί τις ενημερώσεις cron. Περισσότερες πληροφορίες υπάρχουν [στο README] (https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Χρήση του cron του συστήματος για ενημερώσεις",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "Απενεργοποιήστε, εάν εκτελείτε μια τροποποιημένη υπηρεσία ενημέρωσης, όπως την υπηρεσία ενημέρωσης Python που συμπεριλαμβάνεται στην εφαρμογή.",
    "Purge interval" : "Διάστημα καθαρισμού",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "Η ελάχιστη διάρκεια σε δευτερόλεπτα μετά τη διαγραφή ροών και φακέλων, όπου θα αφαιρούνται από τη βάση δεδομένων; Οι τιμές κάτω των 60 δευτερολέπτων θα αγνοούνται.",
    "Maximum read count per feed" : "Ο μέγιστος αριθμός διαβασμένων ανά ροή",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "Ορίζει τη μέγιστη ποσότητα άρθρων που μπορούν να φορτωθούν ανά ροή, τα οποία δεν θα διαγραφούν από την υπηρεσία εκκαθάρισης; εάν τα παλαιά άρθρα επανεμφανιστούν μετά την ανάγνωσή τους, αυξήστε αυτήν την τιμή; οι αρνητικές τιμές, όπως το -1, θα απενεργοποιήσουν αυτή τη λειτουργία.",
    "Maximum redirects" : "Μέγιστος αριθμός ανακατευθύνσεων",
    "How many redirects the feed fetcher should follow." : "Πόσες ανακατευθύνσεις θα μπορεί να ακολουθεί η υπηρεσία ροών.",
    "Feed fetcher timeout" : "Χρόνος λήξης δέκτη ροής",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "Μέγιστος χρόνος σε δευτερόλεπτα, αναμονής φόρτωσης μιας ροής RSS ή Atom; εάν χρειαστεί περισσότερο χρόνο η ενημέρωση θα ματαιωθεί.",
    "Explore Service URL" : "URL Υπηρεσίας Εξερεύνησης",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "Εάν οριστεί, θα τεθεί η ροή της διεύθυνση URL αυτής της υπηρεσίας στην ουρά, για προβολή στο τμήμα ροών. Για επιστροφή στην προεπιλογή αφήστε το πεδίο κενό.",
    "For more information check the wiki." : "Για περισσότερες πληροφορίες δείτε στο wiki.",
    "Update interval" : "Εσωτερική ενημέρωση",
    "Saved" : "Αποθηκεύτηκαν",
    "Download" : "Λήψη",
    "Close" : "Κλείσιμο",
    "No articles available" : "Δεν υπάρχουν διαθέσιμα άρθρα",
    "No unread articles available" : "Κανένα αδιάβαστο άρθρο διαθέσιμο",
    "Open website" : "Άνοιγμα ιστοσελίδας",
    "Star article" : "Επισήμανση με αστέρι",
    "Unstar article" : "Αναίρεση επισήμανσης με αστέρι",
    "Keep article unread" : "Διατήρηση άρθρου ως μη αναγνωσμένου",
    "Remove keep article unread" : "Αφαίρεση διατήρησης άρθρου ως μη αναγνωσμένου",
    "by" : "από",
    "from" : "από",
    "Play audio" : "Αναπαραγωγή ήχου",
    "Download audio" : "Λήψη ήχου",
    "Download video" : "Κατεβάστε το βίντεο",
    "Keyboard shortcut" : "Συντόμευση πλητρολογίου",
    "Description" : "Περιγραφή",
    "right" : "δεξιά",
    "Jump to next article" : "Επόμενο άρθρο",
    "left" : "αριστερά",
    "Jump to previous article" : "Προηγούμενο άρθρο",
    "Toggle star article" : "Εναλλαγή επισήμανσης άρθρου με αστέρι",
    "Star article and jump to next one" : "Επισήμανση άρθρου και μετακίνηση στο επόμενο",
    "Toggle keep current article unread" : "Εναλλαγή διατήρισης τρέχοντος άρθρου ως μη αναγνωσμένου",
    "Open article in new tab" : "Άνοιγμα άρθρου σε νέα καρτέλα",
    "Toggle expand article in compact view" : "Εναλλαγή επέκτασης άρθρου στη συμπαγή προβολή",
    "Refresh" : "Ανανέωση ",
    "Load next feed" : "Φόρτωση επόμενης ροής",
    "Load previous feed" : "Φόρτωση προηγούμενης ροής",
    "Load next folder" : "Φόρτωση επόμενου φακέλου",
    "Load previous folder" : "Φόρτωση προηγούμενου φακέλου",
    "Scroll to active navigation entry" : "Κύλιση στην ενεργή είσοδο πλοήγησης ",
    "Focus search field" : "Εστίαση στο πεδίο αναζήτησης",
    "Mark current article's feed/folder read" : "Σημείωση της ροής/φακέλου του τρέχοντος άρθρου ως αναγνωσμένα",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Ajax ή webcron κατάσταση εντοπίστηκε! Οι ροές σας δεν θα ενημερωθούν!",
    "How to set up the operating system cron" : "Πώς να ρυθμίσετε την υπηρεσία cron του λειτουργικού συστήματος",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Εγκαταστήστε και ρυθμίστε μιά παράλληλη γρηγορότερη ενημέρωση που χρησιμοποιεί το ΑΡΙ ενημέρωσης της εφαρμογής Νέα",
    "Subscribe" : "Εγγραφή",
    "Web address" : "Διεύθυνση ιστοσελίδας",
    "Feed exists already!" : "Η ροή υπάρχει ήδη!",
    "Folder" : "Φάκελος",
    "No folder" : "Κανένας φάκελος",
    "New folder" : "Νέος φάκελος",
    "Folder name" : "Όνομα φακέλου",
    "Go back" : "Μετακίνηση πίσω",
    "Folder exists already!" : "Ο φάκελος υπάρχει ήδη!",
    "Credentials" : "Πιστοποιητικά",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Τα διαπιστευτήρια Βασικής Πιστοποίησης HTTP πρέπει να αποθηκεύονται χωρίς κρυπτογράφηση! Όλοι με πρόσβαση στον διακομιστή ή τη βάση δεδομένων θα έχουν πρόσβαση σε αυτά!",
    "Username" : "Όνομα χρήστη",
    "Password" : "Κωδικός πρόσβασης",
    "New Folder" : "Νέος φάκελος",
    "Create" : "Δημιουργία",
    "Explore" : "Εξερεύνηση",
    "Update failed more than 50 times" : "Η αποστολή απέτυχε πάνω από 50 φορές",
    "Deleted feed" : "Διαγραφή ροής",
    "Undo delete feed" : "Αναίρεση διαγραφής ροής",
    "Rename" : "Μετονομασία",
    "Menu" : "Μενού",
    "Mark read" : "Σημείωση ως ανεγνωσμένου",
    "Unpin from top" : "Ξεκαρφίτσωμα από την κορυφή",
    "Pin to top" : "Καρφίτσωμα στην κορυφή",
    "Newest first" : "Νεότερο πρώτα",
    "Oldest first" : "Παλαιότερο πρώτα",
    "Default order" : "Προεπιλεγμένη σειρά",
    "Enable full text" : "Ενεργοποίηση πλήρους κειμένου",
    "Disable full text" : "Απενεργοποίηση πλήρους κειμένου",
    "Unread updated" : "Μη αναγνωσμένο ενημερώθηκε",
    "Ignore updated" : "Αγνόηση ενημέρωσης",
    "Open feed URL" : "Ανοίξτε τη διεύθυνση URL ροής",
    "Delete" : "Διαγραφή",
    "Dismiss" : "Αποδέσμευση",
    "Collapse" : "Σύμπτυξη",
    "Deleted folder" : "Διαγραφή φακέλου",
    "Undo delete folder" : "Αναίρεση διαγραφής φακέλου",
    "Starred" : "Με αστέρι",
    "Unread articles" : "Μη αναγνωσμένα άρθρα",
    "All articles" : "Όλα τα άρθρα",
    "Settings" : "Ρυθμίσεις",
    "Disable mark read through scrolling" : "Απενεργοποίηση σημείωσης ως διαβασμένων κατά τη κύλιση",
    "Compact view" : "Συμπαγής προβολή",
    "Expand articles on key navigation" : "Ανάπτυξη των άρθρων κατά την πλοήγηση με πλήκτρα",
    "Show all articles" : "Εμφάνιση όλων των άρθρων",
    "Reverse ordering (oldest on top)" : "Ανεστραμμένη ταξινόμηση (παλαιότερα στην κορυφή)",
    "Subscriptions (OPML)" : "Συνδρομές (OPML)",
    "Import" : "Εισαγωγή",
    "Export" : "Εξαγωγή",
    "Error when importing: File does not contain valid OPML" : "Σφάλμα κατά την εισαγωγή: Το αρχείο δεν περιέχει έγκυρο OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Σφάλμα εισαγωγής: Το OPML δεν περιέχει ούτε τροφοδοσίες ούτε φακέλους",
    "Unread/Starred Articles" : "Με αστέρι/Μη αναγνωσμένα Άρθρα",
    "Error when importing: file does not contain valid JSON" : "Σφάλμα κατά την εισαγωγή: το αρχείο δεν περιέχει έγκυρο JSON",
    "Help" : "Βοήθεια",
    "Keyboard shortcuts" : "Συντομεύσεις πλητρολογίου",
    "Documentation" : "Τεκμηρίωση",
    "Report a bug" : "Αναφορά σφάλματος",

    "Contacts" : "Επαφές",
    "Share on social media" : "Κοινή χρήση στα μέσα κοινωνικής δικτύωσης",
    "Contact name" : "Ονομα επαφής",
    "shared from" : "κοινοποιήθηκε από",
    "Shared": "Κοινόχρηστο",
    "Shared articles": "Κοινόχρηστα άρθρα",
    "Users":"Χρήστες"
},
"nplurals=2; plural=(n != 1);");
