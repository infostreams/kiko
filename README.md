Hi! 

This is just one small (logo) component from [my Kiko app](https://apps.apple.com/app/id1486138571) that I built with React Native. 

I have about 500 other components that look just like this one, but I thought this was one of the more interesting ones. As tends to be the case with apps like this, much of the business logic is on the server and the app is just a pretty (?) interface - so the components are fairly dumb and therefore not so interesting to look at. 

This component is simple, but allows us to re-use the logo in three different ways: just the logo, just the word mark, or with logo & word mark. I like how the responsibilities are clearly separated and only combined where necessary, without code duplication, while maintaining sane defaults AND while maintaining the option of overriding or customizing almost everything that could possibly be customized. 
