# A Simple Serverless Oembed Service with http4k

Recently on my usual #githunt prowl I came across a new promising http library written in pure kotlin called [http4k](https://github.com/http4k/http4k/). The library is based on the philosophy of **Application as Function** based on the twitter paper [Your Server as a Function](https://monkey.org/~marius/funsrv.pdf) and promises a lightweight a server toolkit alongwith a very modular approach to adding functionality on top of the core set of capabilities built in. But the best part of all, http4k is written in pure Kotlin and follows a consistent functional approach in handling http services.

Now, as much as a like the kitchen sink approach of Spring framework in getting an almost enterprise ready service running with a couple of tutorials and minimal effort , I really wanted to try my hands at something lighter and different. This was also an opportunity to run a simple serverless jdk service using AWS lambda, this blog is just a small intro to http4k and its ease of use.

## Setting up a micro server with http4k

Http4k promises a simple yet highly configurable way to setup a microserver using nothing but just the core client and an underlying webserver of choosing. 

To start off, create a new base gradle project in Intellij or any IDE of your choosing and add the following dependencies:

```groovy
dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version"
    compile group: "org.http4k", name: "http4k-core", version: "3.113.0"
    compile group: "org.http4k", name: "http4k-server-netty", version: "3.113.0"
}
```

This will add the base http4k library and the netty server library, which these days is my underlying server of choice when building JVM microservices. However, http4k supports various other server implementation as well such as Jetty, Apache Tomcat etc. and some other prominent jvm web servers.

To start us off
