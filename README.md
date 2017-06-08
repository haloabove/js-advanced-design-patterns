# The design patterns in question include the following:

 - Module
 - Prototype
 - Observer
 - Singleton
Each pattern consists of many properties, though, I will emphasize the following key points:

# Module Design Pattern

JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code.

For those that are familiar with object-oriented languages, modules are JavaScript "classes". One of the many advantages of classes is encapsulation - protecting states and behaviors from being accessed from other classes. The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.

Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is, a closure that protect variables and methods (however, it will return an object instead of a function). 

# Revealing Module Pattern
A variation of the module pattern is called the Revealing Module Pattern. The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal. 

# Prototype Design Pattern
Any JavaScript developer has either seen the keyword prototype, confused by the prototypical inheritance, or implemented prototypes in their code. The Prototype design pattern relies on the JavaScript prototypical inheritance. The prototype model is used mainly for creating objects in performance-intensive situations.
The objects created are clones (shallow clones) of the original object that are passed around. One use case of the prototype pattern is performing an extensive database operation to create an object used for other parts of the application. If another process needs to use this object, instead of having to perform this substantial database operation, it would be advantageous to clone the previously created object.

# Revealing Prototype Pattern
Similar to Module pattern, the Prototype pattern also has a revealing variation. The Revealing Prototype Pattern provides encapsulation with public and private members since it returns an object literal.
Since we are returning an object, we will prefix the prototype object with a function. 
Note how the functions stop and go will be shielded from the returning object due to being outside of returned object's scope. Since JavaScript natively supports prototypical inheritance, there is no need to rewrite underlying features.


# Observer Design Pattern
There are many times when one part of the application changes, other parts needs to be updated. In AngularJS, if the $scope object updates, an event can be triggered to notify another component. The observer pattern incorporates just that - if an object is modified it broadcasts to dependent objects that a change has occurred.

Another prime example is the model-view-controller (MVC) architecture; The view updates when the model changes. One benefit is decoupling the view from the model to reduce dependencies.

# Publish/Subscribe
The Publish/Subscribe pattern, however, uses a topic/event channel that sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). This event system allows code to define application-specific events that can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher.

This differs from the Observer pattern since any subscriber implementing an appropriate event handler to register for and receive topic notifications broadcast by the publisher.

Many developers choose to aggregate the publish/subscribe design pattern with the observer though there is a distinction. Subscribers in the publish/subscribe pattern are notified through some messaging medium, but observers are notified by implementing a handler similar to the subject.

# Singleton


A Singleton only allows for a single instantiation, but many instances of the same object. The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.

Finding use cases for Singletons is difficult for most who have not yet used it prior. One example is using an office printer. If there are ten people in an office, and they all use one printer, ten computers share one printer (instance). By sharing one printer, they share the same resources.
