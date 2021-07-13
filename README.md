# Event-Calendar

Event calendar were you can add or remove events you planned.

The whole layout of th web app was made with HTML5

Styles have been made with CSS3 and SASS

The functionality of the app have been made with Javascript and Webpack

The planned event is storing in localStorage, where after that main page maps though the storage and finds object like this:

    {"eventName":"to clean the room","person":"Bob"} with custom key (wed17 or mon5 (translating as wednesday at 17pm or monday at 5pm))

And then it matches the key with existion id that was identified in a slot for event.

Also you can choose and sort for who is event is created.

Note: If the app doens't display events: try to clear your local Storage. 
### How to open your local Storage: 
1. "Incpect" the calendar page.
 
2. Go to the "Application" section

3. In Application section, find "Storage" section. Select "Local Storage"

4. Then click on "Clear All"

5. Reload the calendar page
