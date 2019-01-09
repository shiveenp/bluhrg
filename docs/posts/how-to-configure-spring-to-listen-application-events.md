--- 
title: Spring Post Boot Actions Using Application Events
lang: us-EN
date: "10-01-2019"
---

# Spring Post Boot Actions Using Application Events

Some context first, recently I faced an interesting problem at work. A production app written in Kotlin with Spring Webflux as the webframework had suddenly started taking more than 189 seconds on average to start (more than 3 minutes 😱).

Now as much as I love spring for the easy to use and battle tested APIs, everyone knows its not the nimblest of frameworks around, but having a boot time of 3 minutes was simply unacceptable. The problem was made even worse by the fact that our production kubernetes cluster, on which the app was deployed, usually checks if the app is alive (a simple alive endpoint on the REST api) and triggers container restart if the app doesn't respond withing a given time threshold. Due the delay in the app boot, the kubernetes kept on assuming the app has not started yet and it triggered a flurry of container restarts - resulting in our very talented and very hard working support team being pinged at ungodly hours. Something needed to be done...



