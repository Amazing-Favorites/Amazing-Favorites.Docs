---
title: "Latest features"
description: "Latest features"
---

## v0.6.3

This is the last release before the release of version 0.7 and contains some UI and minor optimization changes.

### 🌟 UI improvements

A more comfortable-looking layout and control placement scheme.

Thank you https://github.com/Zhuangkh for your contribution to this improvement.

![New manager style](/images/20210912-001.png)

### 🌟 Notification Center

We have included all useful notifications in the latest notification centre, so that you can learn about the status and operation of the system efficiently.

Thank you https://github.com/Z4t4r for your outstanding contribution to this improvement.

![Notification Center](/images/20210912-002.png)

![New message](/images/20210912-003.png)

### 🛠 Improvements and Fixes

- Fixes an issue where the CPU is too high when editing tags
- Now, the way you first open managerUI has changed from query strings to AfEventHub.This prevents the user from accidentally popping up the edit box.
- It supports the use of Seq to output logs when development, which seems easier to troubleshoot

## v0.6.2

### 🌟 Support using GoogleDrive and OneDrive to sync your data

Now, in addition to using the Newbe API, you can sync your data across multiple devices with GoogleDrive or OneDrive.

You can enable the corresponding provider in the control panel.

![Cloud Sync in control panel](/images/20210829-001.png)

Once turned on, you can sync your data with the button in the upper right corner of the Manager UI.

![Login to sync](/images/20210829-002.png)

Whenever the sync succeeds, you can be prompted through the Manager UI.

![sync success](/images/20210829-003.png)

### ⭐ Search history autoprompt

Now, when you successfully search and click on the search results, the current search text is recorded so that you can prompt the next time you search.Enhance your accessibility to commonly used content.

### 🛠 Control Panel UI improvements

The Control Panel UI has understood each feature with a small revision so that you can easily understand each feature.

When a feature is not enabled, helpful information about the feature is displayed so that you can understand what it does.

![control panel all disable](/images/20210829-004.png)

When you enable specific features, panels will be folded by default to reduce the use of space.Of course, you can still tap the title to expand the panel to see the details in it.

![feature enabled](/images/20210829-005.png)

### 🐞 bug fix

- Fixes an issue where program errors may occur when application insight is not enabled.

## v0.6.1

### 🌟 application guidance enhancements

We've improved the display of the upper right button to make it easier to understand.

![better buttons](/images/20210815-001.png)

We are very concerned about the privacy of your data, so when the user's privacy policy changes, a prompt will pop up that you need to reconfirm.Until we have your reconfirmation, we will stop some of the relevant features that interact with the cloud to ensure that you have full access to information.

![Privacy Agreement changed](/images/20210815-002.png)

We will now collect anonymous program data with your consent to provide reference for our continuous improvement programs.

Turning this on does not collect any privacy data about you personally, so we invite you to the Control Panel to open it, and your support is a great help to the healthy development of this program.

You can operate this switch in the control panel at any time.

![Anonymous Improving](/images/20210815-003.png)

The extension will pop up on the first installation of the Welcome Page so that users can quickly become familiar with the extension.

### ⭐ enhanced improvements

We've added a presentation and tips for token expiration times to the control panel.And when the application starts, you'll be prompted if it's about to expire

![token expired date](/images/20210815-004.png)

### 🐞 bug fix

Fixes an issue where you can't import if there is a duplicated name in the Favorites hierarchy

### We have a second code contributor

In this release, we have the second code contributor of the project [Z4t4r](https://github.com/Z4t4r).We still welcome more developers to participate in our projects. <https://github.com/newbe36524/Amazing-Favorites>

## v0.6.0

In this release, we've brought a lot of new features

### Supports the generation and sharing of AF code

You can now generate AFCode via the share button on the page.Once you've got AFCode, you can quickly import your favorites into your favorites by searching the bar.This is useful for the following scenarios：

- You have a great resource to share with your friends, but copying links manually doesn't feel cool at all
- You have a wonderful URL that you can't help but share with others that you want to share with a wide range of netizens through your blog posts, but some blog sites don't support hyperlinks (such as WeChat)
- You feel like you're amazing about some of your favorite tags and have to give your friends a good look, but it's a bit silly to copy each Tag manually

Therefore, why not share your happiness to your friends.Come and share with the latest AFCode.

Try copying this to your search bar：

```bash
af://1eyJ1IjoiaHR0cHM6Ly9taWNyb3NvZnRlZGdlLm1pY3Jvc29mdC5jb20vYWRkb25zL2RldGFpbC9hbWF6aW5nLWZhdm9yaXRlcy9ia25qZ2Jwa2Fsb2FqY3BoY2NwY25haGVnZmdsZmllaSIsInQiOiJBbWF6aW5nIEZhdm9yaXRlcyAtIE1pY3Jvc29mdCBFZGdlIEFkZG9ucyIsInRzIjpbXX0=
```

![AF code](/images/20210805-001.gif)

### Faster and better interaction experience

We moved the interactive dialog box for collecting and editing bookmarks to the management page.

This allows you to edit your labels faster, which is great compared to the annoying waits you've had before.

(Of course, you need to pin the management page to the tabs for this to work.)

![better UX](/images/20210805-002.gif)

### Popular tags

We've added a "hot tag bar" below the search bar, where the tags you click will show up so you can find your tags more easily.

![Hot tag](/images/20210805-003.gif)
