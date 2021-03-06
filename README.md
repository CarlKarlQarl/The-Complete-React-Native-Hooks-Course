In retrospect, these should all be their own repos...

But this does provide a nice way of keeping everything for this course in the same place!

# rn-starter
Covers basics of React and React Native. Contains several mini apps, each with a small demonstration of some React/React Native feature, from simpling typing into a controlled form, displaying a collection with FlatList, incrementing an RGB value, or passing props between parent and child components. Also, a great introduction to stack navigation.

# food
Displays resulting images and ratings from the Yelp API. Lots of practice with styling in React Native, my first time using Axios for HTTP requests, and using hooks in components. User will search for a food term, and the results with be place into three categories depending on how expensive the food is.

# blog
Full CRUD app for this course. Blogs have a title and content, and can be created, viewed, editted, and deleted. Simple on its face, but made somewhat more complicated by with hooks, reducers, and context. I'm not terribly experienced with Redux yet, but per the author, this project recreates Redux's functionality with useContext.

# track-server and jsonserver
API to work with the track app. Uses express, mongoose, mongoDB, and mongoDB's cloud, Handles user sign-up, log-ins with authentication, and storage and creation of users and user tracks.

# tracks
Tracks the phone's physical location, displays it on a map, and provides an option to save that journey and view it later. Lots of useContext, useEffect, useCallback, and custom hooks, several times of navigation options (stack, bottom tab, and switch), async storage for tokens, NavigationEvents for blur and focus events, device permissions and requests, simulating user movement for testing, and of course, maps!