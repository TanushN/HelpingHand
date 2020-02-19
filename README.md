# HelpingHand
**From Our Devpost: 

**Created By Tanush Nadimpalli and Ashwin Murali

## Inspiration
When we first heard the prompt, our first thought was of homeless people. We knew that 80% of homeless people had smartphones but obviously 100% do not have homes. As such, we wanted to build a website for homeless people to use from their smartphones to help them find people or organizations who were willing to contribute food or shelter to the homeless.

## What it does
HelpingHand is a mobile friendly website which connects the homeless with people who have the ability to help them. The helpers can create locations on the map pertaining to either food or shelter. Once the event is created, they can also add the time and date of the event or any other special conditions. The homeless people can use the app to find people and can travel to these destinations to receive assistance.

## How we built it
We initially used react to make switching between HTML pages easy, but we quickly realized that many problems came up when other libraries were incorporated. As such we decided to switch to basic HTML and then use the Leaflet and Webflow services to build a map which could have markers on it for events and to build an appealing UI respectively. We used JavaScript to create functions for users to easily make markers at locations. To harvest usable coordinate data, we used a Leaflet geolocation plugin to get coordinates from an address. We then passed the geolocation JSON through Leaflet to create markers in a streamlined process.

## Challenges we ran into
The first challenge we ran into was GitHub and using it to collaborate on the same project. We had limited knowledge of GitHub commands, so we had to learn how to troubleshoot dynamically. We also ran into problems with using React to quickly change between web pages. As such, we were forced to abandon React in favor of having a working project. We also ran into many problems with the geolocation functions of Leaflet. Because they were plugins not native to Leaflet, we needed to find a way to have these plugins automatically create a marker from an address. Another problem we faced was learning CSS quickly. In order to optimize this, we decided to use Webflow to streamline the process. From there, we took elements of the Webflow generated CSS for our home page to modify a CSS page for our map web page. We also struggled with creating functions to do automatic auctions for Leaflet, such as placing a marker and refreshing the map when new data was created. We had to use our creativity to find a way to implement these functions in a method conducive to easy usage for our users. We also needed to find a way to synchronize data between mobile devices and personal computers. Unfortunately, we ran out of time to find a solution to this problem.

## Accomplishments that we are proud of
We are proud to have learned a significant amount about GitHub within just 24 hours. We believe that this knowledge will be extremely useful in the many projects we will work on in the future. We are also proud of making a functional website that can be used by mobile users as well.

## What we learned
We learned a lot about GitHub commands. We also learned how to use Leaflet and create markers using addresses via geolocation. We also increased our knowledge of HTML and JavaScript and improved our ability to adapt when the code doesn't work.

## What's next for HelpingHand
We want to take HelpingHand to the next level and partner with the government and non profits supporting the homeless population to more easily offer resources to those who need it most. With the help of the government we can more easily help homeless people by partnering with programs such as Social Security and food stamp programs. We can also have the app show people locations of nonprofits that can assist homeless people with necessities other than food and shelter, such as clothing, healthcare, and education. We believe that HelpingHand can be used as an extremely useful tool for the homeless population to have quick and easy access to all opportunities available to them.

## Technologies Used
HTML, CSS, Javascript, LeafLet API, Open Street Maps, Figma, Webflow
