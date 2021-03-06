import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Animated, ImageBackground, Dimensions, Easing, TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('screen');

const BackgroundImage = Animated.createAnimatedComponent(ImageBackground)

// const items = [
//     {
//         background: require('./assets/.png'),
//         item_image: require('./assets/coke_regular_can.png'),
//         logo: require('./assets/chandigarhLogo.png'),
//     },
//     {
//         background: require('./assets/coffee_background.png'),
//         item_image: require('./assets/coke_items-01.png'),
//         logo: require('./assets/plus_coffee_coke_logo.png'),
//     },
//     {
//         background: require('./assets/light_background.png'),
//         item_image: require('./assets/dk_coca-cola-light-taste-exotic-mango.png'),
//         logo: require('./assets/light_tastes_coke_logo.png'),
//     },
//     {
//         background: require('./assets/background_no_sugar.png'),
//         item_image: require('./assets/coke_nosugar_can.png'),
//         logo: require('./assets/nosugar_coke_logo.png'),
//     },
// ]

const items = [
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180818-WA0012.jpg'), background: require("./assets/1.png"),image_caption: "The very first photo you sent me, and I was like 'WOW', literally'"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180818-WA0014.jpg'), background: require('./assets/2.jpg'),image_caption: "Wow!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20180818-WA0018.jpg'), background: require('./assets/3.jpg'),image_caption: "The first photo with friends that you sent me!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20180818-WA0026.jpg'), background: require('./assets/4.jpg'),image_caption: "Showing me how much beer you drink"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20180820-WA0001.jpg'), background: require('./assets/5.jpg'),image_caption: "And after drinking"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20180820-WA0002.jpg'), background: require('./assets/6.jpg'),image_caption: "First photo with oru !"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180820-WA0006.jpg'), background: require('./assets/7.jpg'),image_caption: "Zirakpur welcomes you"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180820-WA0030.jpg'), background: require('./assets/8.jpg'),image_caption: "And then there was this evergreen guy hahaha"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180820-WA0060.jpg'), background: require('./assets/9.jpg'),image_caption: "What a time hahahha"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20180902-WA0014.jpg'), background: require('./assets/10.jpg'),image_caption: "Such an awesome photo of Jaya and Jaya-Reverse"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20180905-WA0002.jpg'), background: require('./assets/11.jpg'),image_caption: "Glowing since childhood"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180910-WA0008.jpg'), background: require('./assets/12.jpg'),image_caption: "Looking for a place to celebrate your birthday"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180921-WA0002.jpg'), background: require('./assets/13.jpg'),image_caption: "An awesome time, no words needed!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180924-WA0012.jpg'), background: require('./assets/14.jpg'),image_caption: "Home chronicles!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20180927-WA0007.jpg'), background: require('./assets/15.jpg'),image_caption: "Love all around us!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20181001-WA0003.jpg'), background: require('./assets/16.jpg'),image_caption: "Oreo Sitting, favorite ball of love"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181006-WA0024~2.jpg') ,background: require('./assets/17.jpg'),image_caption: "Shining bright we are!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181008-WA0002.jpg'), background: require('./assets/18.jpg'),image_caption: "College feels"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181008-WA0005.jpg'), background: require('./assets/19.jpg'),image_caption: "Only love is around us!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181026-WA0016.jpg'), background: require('./assets/20.jpg'),image_caption: "What a beauty."
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181028-WA0005.jpg'), background: require('./assets/1.png'),image_caption: "Always with me for shopping"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181028-WA0008.jpg'), background: require('./assets/2.jpg'),image_caption: "So many suits that day"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181030-WA0020.jpg'), background: require('./assets/3.jpg'),image_caption: "Handling my love with love and love"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181030-WA0021.jpg'), background: require('./assets/4.jpg'),image_caption: "Very close to home chronicles !"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181031-WA0011.jpg'), background: require('./assets/5.jpg'),image_caption: "New York has good maggi"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181031-WA0015.jpg'), background: require('./assets/6.jpg'),image_caption: "The best New York tourist"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181102-WA0011.jpg'), background: require('./assets/7.jpg'),image_caption: "Amritsar di kudi says it all! Good times in college"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20181115-WA0002.jpg'), background: require('./assets/8.jpg'),image_caption: "Ajay and ajay-reverse having a wonderful time"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20181116-WA0058.jpg'), background: require('./assets/9.jpg'),image_caption: "Oru love sitting and chilling"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181117-WA0013.jpg'), background: require('./assets/10.jpg'),image_caption: "Jagrata aaya , distant cousin come with me please"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181121-WA0016.jpg'), background: require('./assets/11.jpg'),image_caption: "Tiramisu, the best in town with the best"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20181127-WA0002.jpg'), background: require('./assets/12.jpg'),image_caption: "This guy just radiates love"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181203-WA0043.jpg'), background: require('./assets/13.jpg'),image_caption: "What a blast we have had here"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181203-WA0050.jpg'), background: require('./assets/14.jpg'),image_caption: "Me looking at the menu and jaya"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181203-WA0053.jpg'), background: require('./assets/15.jpg'),image_caption: "Jayu and Deepu wuhu"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181203-WA0055.jpg'), background: require('./assets/16.jpg'),image_caption: "Mandatory Zara Tour (De-tour)"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20181206-WA0022.jpg'), background: require('./assets/17.jpg'),image_caption: "Airport look"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181206-WA0030.jpg'), background: require('./assets/18.jpg'),image_caption: "Jayu bhand before her curfew"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181206-WA0035~2.jpg'),background: require('./assets/19.jpg'),image_caption: "Jayu extreme bhand and just chilling with Deepu"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181206-WA0043.jpg'), background: require('./assets/20.jpg'),image_caption: "Mind Blowing dishes at f bar"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181209-WA0016.jpg'), background: require('./assets/15.jpg'),image_caption: "Ande lene jari hu, shows up at elante!What a girl"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181210-WA0017.jpg'), background: require('./assets/16.jpg'),image_caption: "Not Only Staring at the ceiling enjoyment "
    },
    {logo: require('./assets/puneLogo.png'),item_image: require('./assets/IMG-20181215-WA0023.jpg'), background: require('./assets/17.jpg'),image_caption: "WOW"
    },
    {logo: require('./assets/puneLogo.png'),item_image: require('./assets/IMG-20181215-WA0031.jpg'), background: require('./assets/18.jpg'),image_caption: "Absolute Beauty"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20181222-WA0010.jpg'), background: require('./assets/19.jpg'),image_caption: "MTV VIBESSSS"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190106-WA0019.jpg'), background: require('./assets/20.jpg'),image_caption: "Changing room photo? Lets get Deep in wuhu"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190106-WA0022.jpg'), background: require('./assets/1.png'),image_caption: "Always getting me cute gifts"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190106-WA0025.jpg'), background: require('./assets/2.jpg'),image_caption: "Priceless"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190108-WA0008.jpg'), background: require('./assets/3.jpg'),image_caption: "My baby shining from the ocean like a pearl upon the ocean...Wait you get the drift right"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190109-WA0009.jpg'), background: require('./assets/4.jpg'),image_caption: "Oreo supervising the chilling and mama works"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190119-WA0017.jpg'), background: require('./assets/5.jpg'),image_caption: "Doctor Sandhu , exclusive! Jayu : even more exclusive"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190119-WA0020.jpg'), background: require('./assets/10.jpg'),image_caption: "Happy Baby :)"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190127-WA0014.jpg'), background: require('./assets/9.jpg'),image_caption: "Super Happy Baby :) So beautiful!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190130-WA0016.jpg'), background: require('./assets/8.jpg'),image_caption: "Going to bangalore, jayu be like mai v jana"
    },
    {logo: require('./assets/bangaloreLogo.png'),item_image: require('./assets/IMG-20190202-WA0000.jpg'), background: require('./assets/7.jpg'),image_caption: "Me saying to Jayu when she asks 'Deep, 19 aauna?'"
    },
    {logo: require('./assets/bangaloreLogo.png'),item_image: require('./assets/IMG-20190203-WA0003~3.jpg'),background: require('./assets/11.jpg'),image_caption: "Remembering Juju as my happy place"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190209-WA0005.jpg'), background: require('./assets/6.jpg'),image_caption: "AAaaand she welcomes me with not only love but chocolates, flowers and more love :D"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190209-WA0013.jpg'), background: require('./assets/12.jpg'),image_caption: "Jayu and her rum adventures!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190209-WA0016.jpg'), background: require('./assets/13.jpg'),image_caption: "Rum's bottle is now over"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190212-WA0013.jpg'), background: require('./assets/14.jpg'),image_caption: "Jayu always being the cool one! "
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190212-WA0015.jpg'), background: require('./assets/15.jpg'),image_caption: "Deep when he asks 'Jayu 19 aarea'"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190215-WA0004.jpg'), background: require('./assets/1.png'),image_caption: "Jayu's love bigger than the horizon , Deep's too!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190216-WA0018.jpg'), background: require('./assets/3.jpg'),image_caption: "Chotu meets another chotu"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190216-WA0045.jpg'), background: require('./assets/5.jpg'),image_caption: "Looking deep into Deep's desires and getting the perfect gift!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190219-WA0010.jpg'), background: require('./assets/7.jpg'),image_caption: "WOW"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190226-WA0003.jpg'), background: require('./assets/9.jpg'),image_caption: "Jayu slays . Just slays. "
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190226-WA0018.jpg'), background: require('./assets/11.jpg'),image_caption: "Me too with Jayu!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190312-WA0009.jpg'), background: require('./assets/13.jpg'),image_caption: "Making stuff for herself in PG."
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190313-WA0001.jpg'), background: require('./assets/15.jpg'),image_caption: "Discussing the question papers!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190314-WA0004.jpg'), background: require('./assets/17.jpg'),image_caption: "When exams are over, Jayu returns to her natural element"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190315-WA0009.jpg'), background: require('./assets/19.jpg'),image_caption: "Deepu loves doing everything with Juju!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190320-WA0014.jpg'), background: require('./assets/2.jpg'),image_caption: "Radiance so strong, colors get uplifted on her"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190328-WA0000.jpg'), background: require('./assets/4.jpg'),image_caption: "Counting stars with my star :D !"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190328-WA0010.jpg'), background: require('./assets/6.jpg'),image_caption: "Jayu when she brings over Rum and chips to PG"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190411-WA0001.jpg'), background: require('./assets/8.jpg'),image_caption: "Family!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190418-WA0007.jpg'), background: require('./assets/10.jpg'),image_caption: "Jayu the picture-esque kudi"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190425-WA0012.jpg'), background: require('./assets/12.jpg'),image_caption: "Then thakk gayi agli "
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190428-WA0008.jpg'), background: require('./assets/14.jpg'),image_caption: "Elante Chronicles!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190428-WA0011.jpg'), background: require('./assets/16.jpg'),image_caption: "This chilling dog reminds of that awesome day."
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190505-WA0010.jpg'), background: require('./assets/18.jpg'),image_caption: "Queen? Better than that."
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190510-WA0015.jpg'), background: require('./assets/20.jpg'),image_caption: "love"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190515-WA0047.jpg'), background: require('./assets/1.png'),image_caption: "Starbucks pe only strawberry shake"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190515-WA0048.jpg'), background: require('./assets/2.jpg'),image_caption: "Only cool vibes"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190522-WA0018.jpg'), background: require('./assets/3.jpg'),image_caption: "WE slay!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190529-WA0004.jpg'), background: require('./assets/4.jpg'),image_caption: "26 Sector Chronicles!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190603-WA0005.jpg'), background: require('./assets/5.jpg'),image_caption: "CCD CHRONICLES"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190604-WA0002.jpg'), background: require('./assets/11.jpg'),image_caption: "Got yours too haha"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190606-WA0019.jpg'), background: require('./assets/12.jpg'),image_caption: "Always having a good time with friends!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190607-WA0027.jpg'), background: require('./assets/13.jpg'),image_caption: "ALWAYS the cool one!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190607-WA0033.jpg'), background: require('./assets/14.jpg'),image_caption: "Me getting warnings"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190608-WA0002.jpg'), background: require('./assets/15.jpg'),image_caption: "The cool part of the town hosts the cool couple"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190617-WA0043.jpg'), background: require('./assets/20.jpg'),image_caption: "Happy Vibes!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190715-WA0015.jpg'), background: require('./assets/19.jpg'),image_caption: "cooooooool"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190715-WA0016.jpg'), background: require('./assets/18.jpg'),image_caption: "Poora chandigarh ghuma diya in some hours"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190715-WA0017.jpg'), background: require('./assets/17.jpg'),image_caption: "Happy kid mine"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190719-WA0060.jpg'), background: require('./assets/16.jpg'),image_caption: "The first mandala!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190719-WA0061.jpg'), background: require('./assets/6.jpg'),image_caption: "I saw all the stages of your artwork. ALways appreciate the hard work you put in"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190730-WA0036.jpg'), background: require('./assets/7.jpg'),image_caption: "Sector 8 is love with JAYA!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190804-WA0006.jpg'), background: require('./assets/8.jpg'),image_caption: "Broooooks, we always admired this petite place right"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190819-WA0025.jpg'), background: require('./assets/9.jpg'),image_caption: "Staying with her baby through every stage!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20190819-WA0027.jpg'), background: require('./assets/10.jpg'),image_caption: "When Deepu tells her he'll come for lunch and in the evening too!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190820-WA0013.jpg'), background: require('./assets/11.jpg'),image_caption: "Stars were aligned right :) "
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190821-WA0004.jpg'), background: require('./assets/1.png'),image_caption: "Chandigarh Friend :)"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190901-WA0000.jpg'), background: require('./assets/12.jpg'),image_caption: "Good morning Jayu"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190906-WA0016.jpg'), background: require('./assets/2.jpg'),image_caption: "Such a celebrity"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190906-WA0019.jpg'), background: require('./assets/13.jpg'),image_caption: "I love you."
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190912-WA0002.jpg'), background: require('./assets/3.jpg'),image_caption: "Birthday of the best love ever in this entire universe spanning million of yligt-years"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190914-WA0020.jpg'), background: require('./assets/14.jpg'),image_caption: "Jack and Jones. Deep and Jaya. Iconic? Super Iconic"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190922-WA0010.jpg'), background: require('./assets/4.jpg'),image_caption: "Light of my life"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190922-WA0012.jpg'), background: require('./assets/15.jpg'),image_caption: "Roshni, literal happiness."
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190922-WA0017.jpg'), background: require('./assets/5.jpg'),image_caption: "Only gedi in chandigarh please"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190922-WA0020.jpg'), background: require('./assets/16.jpg'),image_caption: "Soup was nice!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190928-WA0026.jpg'), background: require('./assets/6.jpg'),image_caption: "Pasta and Company were awesome!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190929-WA0005.jpg'), background: require('./assets/17.jpg'),image_caption: "Yeah i am still chilling, incase you were wondering"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20190930-WA0017.jpg'), background: require('./assets/7.jpg'),image_caption: "Jayu showing me the short hair look and trying to convince me"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191006-WA0012.jpg'), background: require('./assets/18.jpg'),image_caption: "Damn"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20191006-WA0014.jpg'), background: require('./assets/8.jpg'),image_caption: "Some treats? Some love? Yes please"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191109-WA0029.jpg'), background: require('./assets/19.jpg'),image_caption: "UBER COOL"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191201-WA0000.jpg'), background: require('./assets/9.jpg'),image_caption: "BETTER THAN ANYTHING. Cooler than cool vibes"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191201-WA0014.jpg'), background: require('./assets/20.jpg'),image_caption: "People are looking for the celebrity while she looks at me"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191201-WA0023.jpg'), background: require('./assets/10.jpg'),image_caption: "Ayeee, slaaaaay. Sirf cool language only please"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191201-WA0029.jpg'), background: require('./assets/5.jpg'),image_caption: "ME SEEING JAYU WHENEVER"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191201-WA0031.jpg'), background: require('./assets/4.jpg'),image_caption: "Jayu be like ek round maarke aate hai, ha ye sahi rahega with Nyka"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191201-WA0045.jpg'), background: require('./assets/3.jpg'),image_caption: "Happy , urf khush baby with ashmita friend"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191201-WA0048.jpg'), background: require('./assets/2.jpg'),image_caption: "Love you more than anything else in the world"
    },
    {logo: require('./assets/dehradunLogo.png'),item_image: require('./assets/IMG-20191207-WA0009.jpg'), background: require('./assets/1.png'),image_caption: "Proud Sister :D"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191211-WA0031.jpg'), background: require('./assets/20.jpg'),image_caption: "Always taking care of her baby"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191211-WA0032.jpg'), background: require('./assets/15.jpg'),image_caption: "Acknowledging deep desires of Deep the gamer"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191211-WA0033.jpg'), background: require('./assets/10.jpg'),image_caption: "Happppppy Birthday kardiya mera haha"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191214-WA0011.jpg'), background: require('./assets/7.jpg'),image_caption: "Glowing girl! Elante hosts a calm, funny and kind hearted girl"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191214-WA0014.jpg'), background: require('./assets/6.jpg'),image_caption: "AND we had breakfast that day! Together. "
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20191214-WA0022.jpg'), background: require('./assets/8.jpg'),image_caption: "Jayu in her natural element"
    },
    {logo: require('./assets/dehradunLogo.png'),item_image: require('./assets/IMG-20191217-WA0018.jpg'), background: require('./assets/9.jpg'),image_caption: "Epic Moment!"
    },
    {logo: require('./assets/dehradunLogo.png'),item_image: require('./assets/IMG-20191217-WA0019.jpg'), background: require('./assets/12.jpg'),image_caption: "Epic moment ft MOM!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200102-WA0017.jpg'), background: require('./assets/11.jpg'),image_caption: "And we all remember this awesome time hahahahaha"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200102-WA0024.jpg'), background: require('./assets/13.jpg'),image_caption: "Shock dena hai ki nahi? Thats okay but pehle discuss karlete hai"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200102-WA0026.jpg'), background: require('./assets/14.jpg'),image_caption: "Damn ya"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20200106-WA0010.jpg'), background: require('./assets/16.jpg'),image_caption: "Awesome baking skills"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200108-WA0008.jpg'), background: require('./assets/17.jpg'),image_caption: "Jayu killing it with Deepu"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200108-WA0015.jpg'), background: require('./assets/19.jpg'),image_caption: "Jayu be like , I like better in this"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200108-WA0017.jpg'), background: require('./assets/18.jpg'),image_caption: "ME proving her point"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200109-WA0023.jpg'), background: require('./assets/14.jpg'),image_caption: "Handling my love with love and only ove"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200110-WA0016.jpg'), background: require('./assets/15.jpg'),image_caption: "Tiramisu, the best in town with the best in the world"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200126-WA0031.jpg'), background: require('./assets/16.jpg'),image_caption: "Trying out every place with your soulmate is the best"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200126-WA0032.jpg'), background: require('./assets/17.jpg'),image_caption: "Shining soulmate*"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200208-WA0018.jpg'), background: require('./assets/18.jpg'),image_caption: "HAPPY SOULMATES TOGETHER"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200208-WA0025.jpg'), background: require('./assets/19.jpg'),image_caption: "BIRTHDAY VIBESSS"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200209-WA0010.jpg'), background: require('./assets/20.jpg'),image_caption: "Just. WOW. WOWW.WOWW."
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200221-WA0016.jpg'), background: require('./assets/6.jpg'),image_caption: "Helping me look good"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200221-WA0020.jpg'), background: require('./assets/7.jpg'),image_caption: "And she needs no help haha"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200312-WA0046.jpg'), background: require('./assets/20.jpg'),image_caption: "Happiness finding itself in our midst"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200322-WA0038.jpg'), background: require('./assets/3.jpg'),image_caption: "YOU ARE ABSOLUTELY AMAZING. Never seen a more wonderful human being"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200325-WA0015.jpg'), background: require('./assets/4.jpg'),image_caption: "He agrees"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200421-WA0076.jpg'), background: require('./assets/5.jpg'),image_caption: "Zara tour!"
    },
    {logo: require('./assets/chandigarhLogo.png'),item_image: require('./assets/IMG-20200510-WA0037.jpg'), background: require('./assets/17.jpg'),image_caption: "Jayu slaying since childhood!"
    },
    {logo: require('./assets/amritsarLogo.png'),item_image: require('./assets/IMG-20200514-WA0015.jpg'), background: require('./assets/18.jpg'),image_caption: "And I am about to doze off, see ya!"
    }
]

class CocaColaSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            initialAnimationFinished: false,
        }
        this.scrollAnimation = new Animated.Value(0);
        this.initialAnimation = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.initialAnimation, {
            toValue: 1,
            duration: 500,
            easing: Easing.elastic(2.4),
            useNativeDriver: true,
        }).start(() => {
            this.setState({
                initialAnimationFinished: true,
            });
        })
    }

    navigateTo = (index) => {
        const { navigate } = this.props.navigation;
        if(index === 2) {
            navigate('Swipeable');
        }
        else {
            navigate('Details', {
                background: items[index].background,
                logo: items[index].logo,
            });
        }
    }

    render() {
        const { scrollAnimation, initialAnimation } = this;
        const { initialAnimationFinished } = this.state;
        return (
            <View style={styles.container}>
                <Background
                    scrollAnimation={scrollAnimation}
                    items={items}
                    initialAnimation={initialAnimation}
                    initialAnimationFinished={initialAnimationFinished}
                />
                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    style={{zIndex: items.length + 1}}
                    onScroll={Animated.event(
                        [ { nativeEvent: { contentOffset: { x: this.scrollAnimation } } } ],
                        {
                            useNativeDriver: true,
                        }
                    )}
                >
                    <Items navigateTo={this.navigateTo} initialAnimation={initialAnimation} scrollAnimation={scrollAnimation} items={items} />
                </Animated.ScrollView>
            </View>
        );
    }
}


const Background = ({scrollAnimation, items, initialAnimation, initialAnimationFinished}) => {
    return(
        <View style={styles.bgContainer}>
            {items.map((item, index) => {
                const zIndex = items.length - index;
                const inputRange = [width*index, width*(index+1)];
                const outputRange = [1, 0];
                const opacity = scrollAnimation.interpolate({
                    inputRange,
                    outputRange,
                    extrapolate:'clamp',
                });

                const inputRangeLogo = index === 0 ? [0, width] : [width*(index-1), width*index, width*(index+1)]; 
                const outputRangeLogo = index === 0 ? [1, 0] : [0, 1, 0]; 
                const scale = scrollAnimation.interpolate({
                    inputRange: inputRangeLogo,
                    outputRange: outputRangeLogo,
                    extrapolate: 'clamp',
                });
                return(
                    <BackgroundImage
                        key={`item-${index}`}
                        style={[styles.bg, {zIndex, opacity}]}
                        resizeMode={'cover'}
                        source={item.background}
                    >
                        <View style={styles.logoContainer}>
                            <Animated.Image
                                style={[styles.logo, { transform: [{ scale: index === 0 && !initialAnimationFinished ? initialAnimation : scale }] }]}
                                resizeMode={'contain'}
                                source={item.logo}
                            />
                        </View>
                    </BackgroundImage>
                );
            })}
        </View>
    );
}

const Items = ({ scrollAnimation, items, initialAnimation, navigateTo }) => {
    const translateY =  initialAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 0],
    });
    return(
        <>
            {items.map((item, index) => {
                const inputRange = index === 0 ? [0, width] : [width*(index-1), width*index, width*(index+1)];
                const outputRange = index === 0 ? ['0deg', '-20deg'] : ['20deg', '0deg', '-20deg'];
                const rotate = scrollAnimation.interpolate({
                    inputRange,
                    outputRange,
                    extrapolate: 'clamp',
                });
                return(
                    // <TouchableWithoutFeedback key={index} onPress={() => navigateTo(index)}>
                    <TouchableWithoutFeedback key={index}>
                        <Animated.View style={[styles.itemContainer, { transform: [{translateY: index === 0 ? translateY : 0}] }]}>
                            <Animated.Image
                                source={item.item_image}
                                resizeMode={'contain'}
                                style={[styles.item, { transform: [{rotate}] }]}
                            />
                            {/* <Animated.Text
                                // source={item.item_image}
                                // resizeMode={'contain'}
                                key={index}
                                style={[styles.caption, { transform: [{rotate}] }]}
                            >{item.image_caption}</Animated.Text> */}
                            {/* <Animated.View style={[styles.itemContainer, { transform: [{translateY: index === 0 ? translateY : 0}] }]}> */}
                            <Animated.View style={[styles.captionContainer, { transform: [{translateY: index === 0 ? translateY : 0}] }]}>
                            <Animated.Text
                                // source={item.item_image}
                                // resizeMode={'contain'}
                                key={index}
                                style={[styles.item, { transform: [{rotate}] }]}
                            >{item.image_caption}</Animated.Text>
                                </Animated.View>                            
                        </Animated.View>
                    </TouchableWithoutFeedback>
                );
            })}
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative',
        backgroundColor: 'red'
    },
    itemContainer: {
        width,
        height,
        justifyContent:'center',
        alignItems:'center',
        // borderRadius:20
    },
    caption:{
        justifyContent:'center',
        width:0.74*width,
        // alignItems:'center',
        marginTop:20

    },
    captionContainer:{
        height:100,
        width:"70%",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        // borderWidth:1,
        marginTop:10,
        backgroundColor:'white'

    },
    item: {
        width: '70%',
        height:'55%',
        borderRadius:20,
        // marginBottom:10
        // borderWidth:1
    },
    bgContainer: {
        position:'absolute',
        width,
        height,
    },
    bg: {
        width:'100%',
        height:'100%',
        position:'absolute',
        alignItems: 'center',
        justifyContent:'flex-start',
    },
    logoContainer: {
        width:'100%',
        marginTop: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    logo: {
        width:'60%',
        height: 90,
    }
});


 
export default CocaColaSlider;