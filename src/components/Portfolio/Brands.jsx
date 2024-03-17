// images
// headers
import PLMHeader from '../../assets/images/PLMHeader.svg'
import iTOVIHeader from '../../assets/images/iTOVIHeader.svg'
import BRHeader from '../../assets/images/BRHeader.svg'
import OliveHeader from '../../assets/images/OliveHeader.svg'
import OilStuffHeader from '../../assets/images/OilStuffHeader.svg'
import ZivaHeader from '../../assets/images/ZivaHeader.svg'

// Pür Life
import PLMSqr1 from '../../assets/images/PLMSqr1.svg'
import PLMSqr2 from '../../assets/images/PLMSqr2.svg'
import PLMCarousel1A from '../../assets/images/PLMCarousel1A.svg'
import PLMCarousel1B from '../../assets/images/PLMCarousel1B.svg'
import PLMPortrait1 from '../../assets/images/PLMPortrait1.svg'
import PLMPortrait2 from '../../assets/images/PLMPortrait2.svg'

// iTOVi
import iTOViSqr1 from '../../assets/images/iTOViSqr1.svg'
import iTOViSqr2 from '../../assets/images/iTOViSqr2.svg'
import iTOViSqr3 from '../../assets/images/iTOViSqr3.svg'
import iTOViSqr4 from '../../assets/images/iTOViSqr4.svg'
import iTOViSqr5 from '../../assets/images/iTOViSqr5.svg'
import iTOViSqr6 from '../../assets/images/iTOViSqr6.svg'
import iTOViSqr7 from '../../assets/images/iTOViSqr7.svg'
import iTOViSqr8 from '../../assets/images/iTOViSqr8.svg'
import iTOViSqr9 from '../../assets/images/iTOViSqr9.svg'
import iTOViSqr10 from '../../assets/images/iTOViSqr10.svg'
import iTOViSqr11 from '../../assets/images/iTOViSqr11.svg'
import iTOViCarousel1A from '../../assets/images/iTOViCarousel1A.svg'
import iTOViCarousel1B from '../../assets/images/iTOViCarousel1B.svg'
import iTOViCarousel1C from '../../assets/images/iTOViCarousel1C.svg'
import iTOViCarousel2A from '../../assets/images/iTOViCarousel2A.svg'
import iTOViCarousel2B from '../../assets/images/iTOViCarousel2B.svg'
import iTOViCarousel2C from '../../assets/images/iTOViCarousel2C.svg'
import iTOViCarousel2D from '../../assets/images/iTOViCarousel2D.svg'
import iTOViCarousel3A from '../../assets/images/iTOViCarousel3A.svg'
import iTOViCarousel3B from '../../assets/images/iTOViCarousel3B.svg'
import iTOViCarousel3C from '../../assets/images/iTOViCarousel3C.svg'
import iTOViCarousel3D from '../../assets/images/iTOViCarousel3D.svg'
import iTOViCarousel3E from '../../assets/images/iTOViCarousel3E.svg'

// Black Rock
import BRLS1 from '../../assets/images/BRLS1.svg'
import BRCarousel1A from '../../assets/images/BRCarousel1A.svg'
import BRCarousel1B from '../../assets/images/BRCarousel1B.svg'
import BRCarousel2A from '../../assets/images/BRCarousel2A.svg'
import BRCarousel2B from '../../assets/images/BRCarousel2B.svg'
import BRCarousel3A from '../../assets/images/BRCarousel3A.svg'
import BRCarousel3B from '../../assets/images/BRCarousel3B.svg'
import BRCarousel3C from '../../assets/images/BRCarousel3C.svg'
import BRCarousel3D from '../../assets/images/BRCarousel3D.svg'

// Olive
import OliveSqr1 from '../../assets/images/OliveSqr1.svg'
import OlivePortrait1 from '../../assets/images/OlivePortrait1.svg'
import OlivePortrait2 from '../../assets/images/OlivePortrait2.svg'
import OlivePortrait3 from '../../assets/images/OlivePortrait3.svg'
import OlivePortrait4 from '../../assets/images/OlivePortrait4.svg'
import OlivePortrait5 from '../../assets/images/OlivePortrait5.svg'

// Oil Stuff
import OilStuffSqr1 from '../../assets/images/OilStuffSqr1.svg'
import OilStuffSqr2 from '../../assets/images/OilStuffSqr2.svg'
import OilStuffSqr3 from '../../assets/images/OilStuffSqr3.svg'
import OilStuffSqr4 from '../../assets/images/OilStuffSqr4.svg'
import OilStuffSqr5 from '../../assets/images/OilStuffSqr5.svg'
import OilStuffSqr6 from '../../assets/images/OilStuffSqr6.svg'
import OilStuffSqr7 from '../../assets/images/OilStuffSqr7.svg'

// Ziva
import ZivaSqr1 from '../../assets/images/ZivaSqr1.svg'
import ZivaSqr2 from '../../assets/images/ZivaSqr2.svg'
import ZivaSqr3 from '../../assets/images/ZivaSqr3.svg'

// videos
import BHRTReel from '../../assets/videos/BHRTReel.mp4'

// Pür Life
import PLMReel1 from '../../assets/images/PLMReel1.mp4'
import PLMReel2 from '../../assets/images/PLMReel2.mp4'
import PLMReel3 from '../../assets/images/PLMReel3.mp4'
import PLMReel4 from '../../assets/images/PLMReel4.mp4'
import PLMReel5 from '../../assets/images/PLMReel5.mp4'

// Black Rock
import BRReel1 from '../../assets/images/BRReel1.mp4'
import BRReel2 from '../../assets/images/BRReel2.mp4'
import BRReel3 from '../../assets/images/BRReel3.mp4'

const brands = [
  {
    id: 1,
    backgroundImageUrl: `url(${PLMHeader})`,
    name: 'Pür Life Medical - Cottonwood Heights',
    description: 'A Holistic Medical Clinic',
    cta: 'Contact Me',
    pDescriptorOne: 'Pür Life Medical is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    videos: [
      {
        src: PLMReel1,
        caption: <p className='content-caption'>Revitalize ✨ Rebalance ✨ Restore<br></br>Here at Pür Life Medical in Cottonwood Heights, Utah we believe in helping you live your optimal life!<br></br>Call our team today to see which of our services will be a best fit for you</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }, 
      {
        src: PLMReel2,
        caption: <p className='content-caption'>What happens at your Hormone Replacement Therapy appointment? 🤔💭<br></br>
        Receiving your personalized Bioidentical hormone pellet for Bioidentical Hormone Replacement Therapy here at Pür Life Medical in Cottonwood Heights, UT is quick and easy! Check out this video to learn more 🎥<br></br>
        👉 Say Goodbye to Fatigue & Feel Younger with Hormone Replacement Therapy at Pür Life Medical in Cottonwood Heights, Utah!<br></br>
        Experience the benefits of hormone replacement such as:<br></br>✅ Regain Energy<br></br>✅ Boosted Libido<br></br>✅ Mental Clarity<br></br>✅ Anti-Aging Benefits<br></br>✅ Science-Backed Solutions<br></br>Book your FREE CONSULTATION with our experienced medical care team today! Because your well-being deserves a personalized approach to lasting vitality!</p>
        ,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }, 
      {
        src: PLMReel3,
        caption: <p className='content-caption'>Chances to WIN FREE SERVICES? Sign us up! 😍 <br></br> We are excited to present an incredible opportunity for you to win part of more than $15,000 worth of FREE SERVICES at our Grand Opening Event on Saturday, February 3rd, from 11 am to 3 pm.<br></br> Be part of the event and stand a chance to WIN:<br></br> ✅ Complete Cellulite Reduction<br></br> ✅ Exclusive Semaglutide Weight Loss Package<br></br> ✅ Hormone Blood Test with a Doctor’s Visit<br></br> ✅ Rejuvenating Lymphatic Massage Session<br></br> ✅ Invigorating Red Light Therapy Treatment Session<br></br> ✅ Revitalizing Cold Plunge and Sauna Session<br></br> ✅ Comprehensive Full-Body Menla Scan<br></br> ✅ Relaxing Compression Boot and Massage Chair Session<br></br> Visit our website for event details:<br></br> 💻 <a href="https://purlifecottonwood.com/grand-opening-event/">purlifecottonwood.com/grand-opening-event/</a><br></br> And guess what? It gets even better! By PRE-REGISTERING for the Grand Opening Event using the link below or in our bio, you’ll earn EXTRA ENTRIES, boosting your chances of winning these fantastic prizes.<br></br> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiNujEugYjy4TKDjWwE9x6nbPNCoAXTPGB_CN84eRG4lZkvw/viewform">docs.google.com/forms/d/e/1FAIpQLSfiNujEugYjy4TKDjWwE9x6nbPNCoAXTPGB_CN84eRG4lZkvw/viewform</a><br></br> Every event attendee automatically receives a FREE entry for a chance to WIN BIG.<br></br> Don’t miss out on our EXCLUSIVE EVENT BOOKING DISCOUNTS, available only at Pür Life Medical - Cottonwood Heights, Utah Grand Opening Event. Enjoy savings of up to 35% off on all booked services during this special occasion.<br></br> Gain ADDITIONAL ENTRIES TO WIN by following us on Social Media and sharing about this event on your social media pages!<br></br> 💻 purlifecottonwood.com<br></br> 📞 385-342-2598<br></br> 📍 1844 Fort Union Blvd, Suite #17 Cottonwood Heights, Utah</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }, 
      {
        src: PLMReel4,
        caption: <p className='content-caption'>Pür Life Medical in Cottonwood Hights truly is where the ✨magic✨ happens!<br></br>
        With incredible services to help you feel you get and live your best life there's no where better to truly take care of yourself in 2024.<br></br>Some of our most popular services include:<br></br>✨ Hormone Replacement Therapy<br></br>✨ Semaglutide and Tirzepatide Weight Loss<br></br>✨ Stem Cell Shots<br></br>✨ Red Light Therapy<br></br>✨ Cellulite Reduction<br></br>✨ Lymphatic Massage<br></br>✨ IV Therapy<br></br>✨ & SO MUCH MORE!!!<br></br>Give us a call to talk with our incredible team and see what services can best support your wellness in 2024 💙</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }, 
      {
        src: PLMReel5,
        caption: <p className='content-caption'>If you are wanting to try new experiences to help you elevate your mood, get better sleep, and give your brain a workout in about 10 minutes, you need to try the NEUROVIZR!<br></br>👉 Neurovizr uses light and sound to engage your brain, body and mind. It promotes:<br></br>🌀 Neuroplasticity (The brain's ability to adapt and learn)<br></br>🌀 Better Sleep<br></br>🌀 Enhanced Mood<br></br>🌀 Reduced Stress<br></br>🌀 & More!<br></br>📞 CALL our team today (385-342-2598) to book your next Neurovizr session!</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }
    ],
      images: [
        {
          src: PLMSqr1,
          caption: <p className='content-caption'>Welcome to Pür Life Medical - Cottonwood Heights!<br></br>We’re thrilled to introduce scientifically-backed wellness alternatives to the wonderful community of Utah.<br></br>Explore more about us by visiting our clinic, checking out our website, or giving our team a call!<br></br>We can’t wait to meet you 💙</p>,
          purpose: 'The purpose of this content is...',
          equipment: 'The equipment used to creat this content is...'
        }, 
        {
          src: PLMPortrait1,
          caption: <p className='content-caption'>Choose Pür Life Medical Clinic in Cottonwood Heights, Utah for holistic care and experience personalized wellness tailored to your unique needs!<br></br>💙 Our expert team integrates cutting-edge treatments with compassionate support, ensuring comprehensive healing from the inside out. With a commitment to optimizing your health and vitality, trust Pür Life Medical Clinic to be your partner in achieving lasting well-being.</p>,
          purpose: 'The purpose of this content is...',
          equipment: 'The equipment used to creat this content is...'
        }, 
        {
          src: PLMSqr2,
          caption: <p className='content-caption'>Have you ever had a full-body Menla scan? 🤔<br></br>
          A full-body Menla scan employs advanced imaging technologies like MRI, CT, and PET to provide detailed 3D images, enabling precise early detection of various medical conditions. The benefits include:<br></br>Early identification of abnormalities<br></br>Enhanced diagnostic accuracy<br></br>Tailored and timely treatment plans<br></br>An in-depth look at your body's overall functionality and wellness<br></br>When you visit Pür Life Medical - Cottonwood we love offering a Menla Scan to clients to help you get a snapshot of your wellness over time!<br></br>Interested in getting a Menla Scan with your treatment? Ask our team about it today!</p>,
          purpose: 'The purpose of this content is...',
          equipment: 'The equipment used to creat this content is...'
        },
        {
          src: PLMPortrait2,
          caption: <p className='content-caption'>Tired of feeling tired? 🥱<br></br>Frustrated by lack of sleep? 😪<br></br>Aggravated by those nagging aches and pains? 🤕<br></br>Say hello to a healthier, more balanced life… say hello to full-body light therapy❣️<br></br>The TheraLight 360 full-body light therapy system helps relieve pain and reduce inflammation quickly, safely, and effectively. It has also been shown to improve sleeping habits, increase energy, and improve mental acuity.<br></br>✅ Expedited recovery times<br></br>✅ Tissue strengthening<br></br>✅ Increased blood flow and lymphatic drainage<br></br>✅ Enhanced immune response<br></br>✅ Reduced anxiety and depression<br></br>✅ Improved sleep patterns<br></br>Try out Red Light Therapy today at Pür Life Medical - Cottonwood Heights!</p>,
          purpose: 'The purpose of this content is...',
          equipment: 'The equipment used to creat this content is...'
        }
      ],
    carousel: [
      {
        id: 1,
        images: [PLMCarousel1A, PLMCarousel1B],
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }
    ]
  },
  {
    id: 2,
    backgroundImageUrl: `url(${iTOVIHeader})`,
    name: 'iTOVi',
    description: 'Scanner for Essential Oils',
    cta: 'Contact Me',
    pDescriptorOne: 'iTOVi is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    images: [
      {
        src: iTOViSqr1,
        caption: <p className='content-caption'>Vote for your favorite one☝️ in the comments below!<br></br>🌟 Starry Night<br></br>💙 iTOVi Blue Silicone Sleeve<br></br>🌼 Aqua Floral</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr2,
        caption: <p className='content-caption'>ORANGE you glad you've got some citrus essential oils? 🍊 😉<br></br>
        Don't forget to SAVE these sunny blends to try out later! 👇 👇 👇<br></br>Liquid Sunshine 🌞<br></br>3 drops grapefruit<br></br>3 drops orange<br></br>2 drops bergamot<br></br>2 drops lemon<br></br>Orange Delight 🍊<br></br>3 drops orange<br></br>2 drops rosemary<br></br>2 drops spearmint<br></br>Courageous 💪<br></br>3 drops bergamot<br></br>3 drops tangerine<br></br>2 drops basil<br></br>2 drops clary sage<br></br>What are your favorite citrusy combinations? 🤔 💭</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr3,
        caption: <p className='content-caption'>So you've seen the iTOVi Scanner, but what about the iTOVi Report?<br></br>
        ✨ With the iTOVi Report you are able to gain valuable insights into how you can best support your wellness with essential oils!<br></br>✨ Get a personalized report of the essential oils, blends, and supplements that your body shows the strongest response to at the time of your iTOVi Scan, backed by science!<br></br>✨ When was the last time that you had an iTOVi Scan report, and what were your top essential oils recommendations?</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr4,
        caption: <p className='content-caption'>We are so grateful to have such an amazing community of essential oils users here at iTOVi! Thank you for letting us be a part of your wellness 💙</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr5,
        caption: <p className='content-caption'>Have you been looking for a way to boost your essential oils business?<br></br>
        👉 With the iTOVi Scanner & App, iTOVi members have access to many powerful business building tools—but until now there hasn’t been much written on how to use those tools effectively. That’s why iTOVi is proud to present: 10 Ways to Build Your Business with the iTOVi Scanner, featuring the stories of ten successful iTOVi business builders and their practices, tips, and insights into business building with an iTOVi Scanner.<br></br>Their stories will teach you how to spark people’s interest in essential oils, on-board new members, follow-up with your contacts and team members, increase the volume of your team’s monthly orders, and more!<br></br>Learn more and download this free resource by visiting our website at <a href="https://www.itovi.com/research/">https://www.itovi.com/research/</a></p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr6,
        caption: <p className='content-caption'>Find out which essential oils and supplements your body responds to best through a DNA analysis!<br></br>Your DNA is the blueprint for your body, and it largely remains the same throughout your entire lifetime. Your DNA is a big part of what makes you unique. And that means the ideal wellness plan would be unique in a way that matches your genome.<br></br>iTOVi DNA dives into your DNA, using your genetic markers to isolate the products that best match YOUR DNA, so you can build a wellness plan based on who you are!<br></br>Learn more about iTOVi DNA by visiting our website at <a href="www.dna.itovi.com">www.dna.itovi.com</a> or asking us down below! We would love to chat with you about it! 🧬<br></br>**Currently available in the US & Canada!**</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr7,
        caption: <p className='content-caption'>With Mandalorian back on Disney+, we thought we'd bring back one of our favorite photo's from last year!<br></br>Wouldn't it be great if you could Scan for Ice Cream on the iTOVi Scanner? Just like essential oils, Ice Cream helps everything in life 🤷‍♀️🍦🤣<br></br>What is your favorite Ice Cream flavor?</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr8,
        caption: <p className='content-caption'>We love Tangerine! 🍊Besides its ability to infuse any space with a sweet, refreshing aroma this oil has a high limonene content, making it a great booster for the immune system. You can also use it to clean around the home, getting rid of any sticky and stubborn adhesive spots you may have.<br></br>What is your favorite way to use Tangerine Oil? And what do you diffuse it with? 🤔💭</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr9,
        caption: <p className='content-caption'>Essential Oils: Explained by Disney 🏰🐭🧚🏼‍♀️💧😂. LIKE this photo and TAG A FRIEND below who you think would LOL seeing this!</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr10,
        caption: <p className='content-caption'>Mental health is so important, and so we wanted to start a conversation!<br></br>👉 What are your favorite oils to use & activities to do when you are feeling anxious and overwhelmed?<br></br>One thing that we love is doing an iTOVi Scan & creating a custom roller blend with the top products to apply!<br></br>Let us know what you love doing down below 🤔💭</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: iTOViSqr11,
        caption:<p className='content-caption'>Ummmm.... YES PLEASE! ✨<br></br> Which Kardashian or Jenner is repping your favorite part of being an Oiler? 👇</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
    ],
    video: [],
    carousel: [
      {
        id: 1,
        images: [iTOViCarousel1A, iTOViCarousel1B, iTOViCarousel1C],
        caption: <p className='content-caption'>✨G I F T - A W A Y✨<br></br>We’re SPRINGing into the new season by giving back to our amazing community!<br></br>Enter to win the oily gift set that dreams are made of here!<br></br>❤️From @itoviscanner : The iTOVi Pattern Clutch which holds your iTOVi Scanner, charging cord and box, and 16 sample sized oil vials!<br></br>❤️From @lukasandlexx : This super cute Black Hexagon Oil Holder that holds nineteen 5 or 15mL bottles!<br></br>❤️From @theoilstuff : The Brand New ’50 Ancient remedies: a History of Essential Oils and Where They Come From’ book by Jamie R. Mortensen, 5 ‘Everyday Essentials Beginners Guide’ books to share with your team, and a Lava Rock & Marble Diffuser Bracelet!<br></br>🌿 Here’s how to enter: 🌿<br></br>✅FOLLOW @itoviscanner @lukasandlexx & @theoilstuff<br></br>✅LIKE this post<br></br>✅SAVE it (little flag in the corner)<br></br>✅& COMMENT your favorite Spring Time essential oils down below!<br></br>👉Want to earn some extra entries? Share this post in your stories and tag more friends for ✋additional entries each!<br></br>**Giveaway ends on April 24th at 11:59pm, and the winner will be announced and contacted individually by @itoviscanner on April 26th!**</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...',
      },
      {
        id: 2,
        images: [iTOViCarousel2A, iTOViCarousel2B, iTOViCarousel2C, iTOViCarousel2D],
        caption: <p className='content-caption'>❌GIVEAWAY CLOSED: Winner @goldenbloomertribe ❌<br></br>✨Holiday Box GIVEAWAY✨<br></br>That's right, we want to give away the oily gift set that dreams are made of away to one lucky winner!<br></br>🤍 From @itoviscanner : Our iTOVi Patter Clutch (holds your iTOVi Scanner, charger, and 16 sample sized oils!), a Silicone Sleeve of your choice, and this cute gold diffuser!<br></br>🤍 From @thecuratedcarrot : Three Sparkle Glass Diffuser Bracelets in Rose Gold, Yellow Gold, and Silver with lava rock accents!<br></br>🤍 From @littlefawnhandmade : The cutest Pastel Handmade Rainbow Diffuser and a 'Choose Joy' vinyl sticker!<br></br>🤍 From @millennioils : An 'Ice' Bottle Holder (holds 5 essential oils bottles!) a 10mL 'Grateful' Roller Bottle & a 10mL 'Joyful' Roller Bottle, and a set of gemstone roller tops!<br></br>Here's how to enter:<br></br>✨Follow @millennioils @littlefawnhandmade @thecuratedcarrot & @itoviscanner<br></br>✨Like this post<br></br>✨Save it (little flag in the corner)<br></br>✨Tag 2 oil lovers in separate comments<br></br>✨& Comment your favorite holiday oils and blends down below!<br></br>Want to earn some extra entries? Share this post in your stories and tag more friends for ✋ additional entries each!<br></br>Giveaway ends on Friday 12/18 and the winner will be announced and contacted individually on 12/19!</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to create this content is...',
      },
      {
        id: 2,
        images: [iTOViCarousel3A, iTOViCarousel3B, iTOViCarousel3C, iTOViCarousel3D, iTOViCarousel3E],
        caption: <p className='content-caption'>You did it! You got your brand new iTOVi Scanner, and you can't wait to share it with everyone that you know.<br></br>But.. what now?<br></br>👉 Do you need a little help understanding your new iTOVi Scan Report? We've got you covered!<br></br>Don't forget to SAVE this post to come back to later!<br></br>Got additional questions about iTOVi? Leave them down below! We would love to talk with you about them.</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to create this content is...',
      },
    ]
  },
  {
    id: 3,
    backgroundImageUrl: `url(${BRHeader})`,
    name: 'Black Rock Mountain Resort',
    description: 'Luxury Townhomes and Condos located in Park City, Utah',
    cta: 'Contact Me',
    pDescriptorOne: 'Black Rock Resort is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    images: [
      {
        src: BRLS1,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
    ],
    videos: [
      {
        src: BRReel1,
        caption: <p className='content-caption'>caption</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: BRReel2,
        caption: <p className='content-caption'>caption</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: BRReel3,
        caption: <p className='content-caption'>caption</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to create this content is...'
      }
    ],
    carousel: [
      {
        id: 1,
        images: [BRCarousel1A, BRCarousel1B],
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        id: 2,
        images: [BRCarousel2A, BRCarousel2B],
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        id: 3,
        images: [BRCarousel3A, BRCarousel3B, BRCarousel3C, BRCarousel3D],
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }
    ]
  },
  {
    id: 4,
    backgroundImageUrl: `url(${OliveHeader})`,
    name: 'Olive Dog Salons',
    description: 'Luxury Townhomes and Condos located in Park City, Utah',
    cta: 'Contact Me',
    pDescriptorOne: 'Black Rock Resort is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    images: [
      {
        src: OlivePortrait1,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OliveSqr1,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OlivePortrait2,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OlivePortrait3,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OlivePortrait4,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OlivePortrait5,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
    ],
    video: [BHRTReel],
    carousel: []
  }, 
  {
    id: 5,
    backgroundImageUrl: `url(${OilStuffHeader})`,
    name: 'Oil Stuff',
    description: 'Luxury Townhomes and Condos located in Park City, Utah',
    cta: 'Contact Me',
    pDescriptorOne: 'Black Rock Resort is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    images: [
      {
        src: OilStuffSqr1,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OilStuffSqr2,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OilStuffSqr3,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OilStuffSqr4,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OilStuffSqr5,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OilStuffSqr6,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: OilStuffSqr7,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
    ],
    video: [],
    carousel: []
  },
  {
    id: 6,
    backgroundImageUrl: `url(${ZivaHeader})`,
    name: 'Ziva Medical',
    description: 'Luxury Townhomes and Condos located in Park City, Utah',
    cta: 'Contact Me',
    pDescriptorOne: 'Black Rock Resort is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    images: [
      {
        src: ZivaSqr1,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: ZivaSqr2,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        src: ZivaSqr3,
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
    ],
    video: [BHRTReel],
    carousel: []
  }
]

export { brands }