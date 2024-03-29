---
{
  "title": "xbar Weather Alerts",
  "preview": "Checkout this useful app I made",
  "uri": "xbar-weather-alerts",
  "date": "June 06, 2022",
  "dateTime": "2022-06-06"
}
---

# xbar Weather Alerts 

Recently I built an app for [xbar](https://xbarapp.com/) that allows any macOS user to see current weather information for their location in the menu bar. In addition to showing the current temperature, the app will also display information about any active weather alerts for the user's location. 

## The Problem

Until the beginning of this year, I had never really used a computer running macOS. However, when I started a new job where my computer was a MacBook, I quickly started looking into ways to customize my experience. One of the first things I discovered was [xbar](https://xbarapp.com/), a tool that allows users to create apps that run in the menu bar. I knew I wanted a weather app in my menu bar, but the ones I found didn't have all the features I wanted. So, I decided to build my own.

## Features I Wanted

I wanted my weather app to have the following features:

* Display the current temperature
* Display my current location
* Display any active weather alerts for my location
* Doesn't require a paid API

## First Steps

The first thing I needed to do was decide how I would get the data I needed. For this app, the data I need consists of two things. First, I needed to get data about the user's current location. Second, I needed to find a reliable source for weather data that didn't require a paid API.

### Finding the User's Location

Figuring out the best way to find a user's location took some work. This was because I wanted to ensure the app only received minimal data about a user's location. How I decided to handle this was to use an API that would return minimal data about the user's location based on their IP address. A downside is that sometimes the returned location needs to be more precise to check for weather alerts accurately. To combat this, I added a feature that allows the user to manually enter their location.

### Getting the Weather Data

At first, I thought finding a reliable source for weather data that did not require a paid API would be difficult. However, I quickly found that the National Weather Service (NWS) has a great API that provides a lot of data about the weather. The NWS API is also free to use and does not require any API key. The only downside to using the NWS API is that it only provides data for the United States. However, I decided I could live with this since I live in the United States.

## Building the App

After figuring out how to get the necessary data, I was ready to start building the app. But before building the app, I still needed to solve one more problem. I knew I wanted to use TypeScript, but TypeScript can be a little challenging to use with xbar. As a result, I ended up going on a side quest to make it easier to use TypeScript with xbar, which you can read about [here](https://theogainey.com/deno-xbar). 

Now that I had made it easier to use TypeScript with xbar, It was finally time to start building. For this app, the logic consisted of three main parts. First, I needed to get the user's location. Second, I needed to get the weather data for the user's location. Finally, I needed to display the data in the menu bar. 

### Getting the User's Location

As discussed previously, I decided to use an API that would return data about a user's location based on their IP address. Additionally, I decided to allow the user to manually enter their location if they desired. How this process broke down was as follows. First, check if the user opted to use a manually entered location. If they did, use that location. If they did not, use the location returned by the API. 

### Getting the Weather Data

Given that I already decided to use the NWS API, this step was pretty straightforward. The only challenges in this step were making sure that the user's location was formatted correctly for the API and making sure I used the correct API endpoints. 

### Displaying the Data

The final thing I needed to do was to display the weather data. Thanks to my side quest, I made it easy to use TypeScript with xbar. As a result, this step was pretty straightforward. All I needed to do was format the data to best convey the information to the user. I decided that the app's default state would display the user's current city, state, and temperature. To alert a user to the presence of any active weather alerts, I decided that the text's color would change depending on the alert's severity. Finally, I decided to allow the user to see more detailed information about the weather alerts. To do this, I made it so that when the user clicks on the app, it will display a dropdown menu with more detailed information about the weather alerts.

## How to Use the App

For information on how to use the app, please visit the app's [GitHub repository](https://github.com/theogainey/xbar-weatheralerts). 

{%imgLink href="https://github.com/theogainey/xbar-weatheralerts"%}
{% imgRoot src="https://opengraph.githubassets.com/83eca2b4bdecbe7a90bbb92cc9a6b0c82d5c3c93adbbcb6a779dd1cc95f3e973/theogainey/xbar-weatheralerts" %}
{% /imgLink %}
