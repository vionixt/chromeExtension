# chromeExtension
Chrome extension to disable logo and search box on every new tab.

A very simple chrome extension to disable google logo and search space appearing in all the new tab.
Does not contain any complex logic here.
DOM object visibility made to hidden, and size to 0. 
Though actual object gets loaded, they are not displayed.

Known issues: As soon as google decides to change the id for logo and the seach space, it won't work.
In such situation, we need to change the hard coded ids'

As simple as that. 
