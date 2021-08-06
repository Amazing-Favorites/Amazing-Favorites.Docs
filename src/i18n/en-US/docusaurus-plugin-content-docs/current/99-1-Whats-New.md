---
title: "Update the history"
description: "Update the history"
---

## v0.6.0

In this release, we've brought a lot of new features

### Supports the generation and sharing of AF code

You can now generate AFCode via the share button on the page.Once you've got AFCode, you can quickly import your favorites into your favorites by searching the bar.This is useful for the following scenarios：

- You have a great resource to share with your friends, but copying links manually doesn't feel cool at all
- You have a wonderful URL that you can't help but share with others that you want to share with a wide range of netizens through your blog posts, but some blog sites don't support hyperlinks (such as WeChat Public Number)
- You feel like you're amazing about some of your favorite Tag tags and have to give your friends a good look, but it's a bit silly to copy each Tag manually

Therefore, solo music is not as good as public music.Come and share with the latest AFCode.

Try copying this to your search bar：

```bash
af://1eyJ1IjoiaHR0cHM6Ly9taWNyb3NvZnRlZGdlLm1pY3Jvc29mdC5jb20vYWRkb25zL2RldGFpbC9hbWF6aW5nLWZhdm9yaXRlcy9ia25qZ2Jwa2Fsb2FqY3BoY2NwY25haGVnZmdsZmllaSIsInQiOiJBbWF6aW5nIEZhdm9yaXRlcyAtIE1pY3Jvc29mdCBFZGdlIEFkZG9ucyIsInRzIjpbXX0=
```

![AF code](/images/20210805-001.gif)

### Faster and better interaction experience

We moved the interactive dialog box for collecting and editing bookmarks to the management page.

This allows you to edit your labels faster, which is great compared to the annoying waits you've had before.

(Of course, you need to pin the management interface to the tabs for this to work.)

![better UX](/images/20210805-002.gif)

### Popular tags

We've added a "hot tag bar" below the search bar, where the tags you click will show up so you can find your tags more easily.

![Hot tag](/images/20210805-003.gif)

## v0.5.10

Changes

- Temporarily removed AOT publishing, waiting for .net 6 pre7 to fix @newbe36524 (#73)

🛠 Improvements

- UI Interface Partial optimization @newbe36524 (#75)

## v0.5.9

Changes

🛠 Improvements

- Upgrade AntDeign component to version 0.9 @newbe36524 (#72)

## v0.5.8

Changes

🛠 Improvements

- Now you can install this extension in the Chrome Extension Store @newbe36524 (#71)

## v0.5.7

Changes

🛠 Improvements

- Better-looking first-load animation UX @newbe36524 (#69)

## v0.5.6

Changes

🌟 New Features

- Supports the generation and sharing of AF code @newbe36524 (#67)

🐞 Bug Fixes

- Fixes problems with partial cloud sync failures @newbe36524 (#66)

## v0.5.5

Changes

🐛 Bug Fixes

- Fix some bugs in the bookmark editing interface

## v0.5.4

Changes

- Bookmark editing is supported on the administration page
- Search performance optimization, down from 500 milliseconds to 50 milliseconds
- Supports adding favorites as soon as you click the extension button without waiting

## v0.5.3

Changes

- Optimize user search box input and now it's smoother
- Fix high CPU usage issues caused by "hot labels."

## v0.5.2

Changes

- Support for "hot tags" feature

## v0.5.1

Changes

- Support for .net AOT

## v0.5.0

Changes

- Supports activation of existing windows instead of opening a new one
- When you import a favorite, the folder is imported as a tag
- When the manage UI pops up the edit box, the Autofocus "Add Tag" text box
- Supports using comma separation to represent multiple tags when adding tags
- Add a description of the User Privacy Agreement to the Control Panel
- Smaller installation packages
- Use Indexed db as a database to improve performance
- Added a "Like the project" button so that users can support the project

## v0.4.3

Changes

- Tag-related UI improvements
- User experience improvements for Add Tag

## v0.4.1

- The installation package is smaller, at only 5MB
- Add a description of the user privacy agreement

## v0.4.0

- Labels that support synchronization through the cloud
- Supports searching through Pinyin
- The new icon

## v0.3.1

The target framework is modified to .net 6

## v0.3

Supports the activation of the management interface via shortcuts

## v0.2

First public release
