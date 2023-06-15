# Lichtschalter

## 1. Raum-Komponente

-   Erstelle eine Raum-Komponente (engl. "Room") in `/src/Room.js`.
-   Das Wurzel (engl. "root") `div` der Komponente sollte das Attribut `className` mit dem Wert 'lit' haben
-   Füge einen Paragraph hinzu, der lautet: 'The room is lit' (dt. "Der Raum ist beleuchtet").
-   Füge einen "Lichtschalter"-Button hinzu
-   Ein Klick auf den Button schaltet das Licht an und aus:
    -   Der Text sollte sich in 'The room is dark' (dt. "Der Raum ist dunkel") ändern.
    -   Die Klasse des `div` sollte sich in 'dark' ändern
-   Benutze den `useState` Hook um den Zustand (engl. "state") des Lichtschalters zu speichern. Standardmäßig sollte der Raum beleuchtet sein.

Du kannst folgendes CSS verwenden:

```css
html,
body,
#root,
.room {
    height: 100vh;
    margin: 0;
    text-align: center;
    font-family: "Georgia", serif;
    font-size: 1.5rem;
}

button {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
}

.room {
    padding: 30px;
}

.lit {
    background-color: white;
    color: black;
}

.dark {
    background-color: black;
    color: white;
}
```
