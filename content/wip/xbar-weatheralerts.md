# xbar Weather Alerts 

Recently I built a app for [xbar](https://xbarapp.com/) that allows any macOS user to see current weather information for their location in the menu bar. In addition to showing the current temperature, the app will also display information about any active weather alerts for the user's location. 

## The Problem

Until the beginning of this year, I had never really used a computer running macOS. However, when I started a new job where my work computer was a MacBook, I quickly started looking into ways to customize my experience. One of the first things I discovered was [xbar](https://xbarapp.com/), a tool that allows users to create apps that run in the menu bar. I knew that I wanted to have a weather app in my menu bar, but the ones I found didn't have all the features I wanted. So, I decided to build my own.

## Features I Wanted

I wanted my weather app to have the following features:

* Display the current temperature
* Display my current location
* Display any active weather alerts for my location
* Doesn't require a paid API

## First Steps

The first thing I need to do was to decide how I was going to get the data I needed. For this app the data I need consisted of two thing. First I needed to get data about the user's current location. Second, I needed to find a reliable source for weather data that didn't require a paid API.

### Finding the User's Location

Figuring out the best way to find a user's location was a little difficult. The reason for this I wanted to make sure the app only received a minimal amount of data about a users location. How I decided to handle this was to use an API that would return minimal data about the user's location based on their IP address. A downside to this is that sometimes the location is not precise enough to accurately check for weather alerts. To combat this, I decided that I needed to add a feature that would allow the user to manually enter their location.

### Getting the Weather Data

At first I thought finding a reliable source for weather data that did not require a paid API would be difficult. However, I quickly found that the National Weather Service (NWS) has a great API that provides a lot of data about the weather. The NWS API is also free to use and does not require any sort of API key. The only downside to using the NWS API is that it only provides data for the United States. However, this was not a problem for me personally since I live in the United States.

## Building the App



<!-- ## How I Built This app


## How to Use This app -->

## What I Learned

## Next Steps



[![](https://opengraph.githubassets.com/83eca2b4bdecbe7a90bbb92cc9a6b0c82d5c3c93adbbcb6a779dd1cc95f3e973/theogainey/xbar-weatheralerts)](https://github.com/theogainey/xbar-weatheralerts)