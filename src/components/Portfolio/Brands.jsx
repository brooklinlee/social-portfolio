// assets
import PLMHeader from '../../assets/images/PLMHeader.svg'
import BRHeader from '../../assets/images/BRHeader.svg'
import PLMSkinnyShot1 from '../../assets/images/PLMSkinnyShot1.svg'
import PLMSkinnyShot2 from '../../assets/images/PLMSkinnyShot2.svg'

// videos
import BHRTReel from '../../assets/videos/BHRTReel.mp4'
import PLMJetReel from '../../assets/videos/PLMJetReel.mp4'
import PLMGrandOpening from '../../assets/videos/PLMGrandOpening.mp4'

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
        src: BHRTReel,
        caption: <p className='content-caption'>What happens at your Hormone Replacement Therapy appointment? 🤔💭 <br></br> Receiving your personalized Bioidentical hormone pellet for Bioidentical Hormone Replacement Therapy here at Pür Life Medical in Cottonwood Heights, UT is quick and easy! Check out this video to learn more 🎥<br></br> 👉 Say Goodbye to Fatigue & Feel Younger with Hormone Replacement Therapy at Pür Life Medical in Cottonwood Heights, Utah!<br></br>Experience the benefits of hormone replacement such as:<br></br>✅ Regain Energy<br></br> ✅ Boosted Libido<br></br> ✅ Mental Clarity<br></br> ✅ Anti-Aging Benefits<br></br> ✅ Science-Backed Solutions<br></br>Book your FREE CONSULTATION with our experienced medical care team today! Because your well-being deserves a personalized approach to lasting vitality!<br></br>💻 purlifecottonwood.com<br></br> 📞 385-342-2598<br></br> 📍 1844 Fort Union Blvd, Suite #17 Cottonwood Heights, Utah<br></br> ✉️ info@purlifecottonwood.com</p>
        ,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }, 
      {
        src: PLMJetReel,
        caption: <p className='content-caption'>Revitalize ✨ Rebalance ✨ Restore <br></br> Here at Pür Life Medical in Cottonwood Heights, Utah we believe in helping you live your optimal life!<br></br> Call our team today to see which of our services will be a best fit for you<br></br> 💻 <a href="https://purlifecottonwood.com/">purlifecottonwood.com</a><br></br> 📞 385-342-2598<br></br> 📍 1844 Fort Union Blvd, Suite #17 Cottonwood Heights, Utah<br></br> ✉️ info@purlifecottonwood.com</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }, 
      {
        src: PLMGrandOpening,
        caption: <p className='content-caption'>Chances to WIN FREE SERVICES? Sign us up! 😍 <br></br> We are excited to present an incredible opportunity for you to win part of more than $15,000 worth of FREE SERVICES at our Grand Opening Event on Saturday, February 3rd, from 11 am to 3 pm.<br></br> Be part of the event and stand a chance to WIN:<br></br> ✅ Complete Cellulite Reduction<br></br> ✅ Exclusive Semaglutide Weight Loss Package<br></br> ✅ Hormone Blood Test with a Doctor’s Visit<br></br> ✅ Rejuvenating Lymphatic Massage Session<br></br> ✅ Invigorating Red Light Therapy Treatment Session<br></br> ✅ Revitalizing Cold Plunge and Sauna Session<br></br> ✅ Comprehensive Full-Body Menla Scan<br></br> ✅ Relaxing Compression Boot and Massage Chair Session<br></br> Visit our website for event details:<br></br> 💻 <a href="https://purlifecottonwood.com/grand-opening-event/">purlifecottonwood.com/grand-opening-event/</a><br></br> And guess what? It gets even better! By PRE-REGISTERING for the Grand Opening Event using the link below or in our bio, you’ll earn EXTRA ENTRIES, boosting your chances of winning these fantastic prizes.<br></br> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiNujEugYjy4TKDjWwE9x6nbPNCoAXTPGB_CN84eRG4lZkvw/viewform">docs.google.com/forms/d/e/1FAIpQLSfiNujEugYjy4TKDjWwE9x6nbPNCoAXTPGB_CN84eRG4lZkvw/viewform</a><br></br> Every event attendee automatically receives a FREE entry for a chance to WIN BIG.<br></br> Don’t miss out on our EXCLUSIVE EVENT BOOKING DISCOUNTS, available only at Pür Life Medical - Cottonwood Heights, Utah Grand Opening Event. Enjoy savings of up to 35% off on all booked services during this special occasion.<br></br> Gain ADDITIONAL ENTRIES TO WIN by following us on Social Media and sharing about this event on your social media pages!<br></br> 💻 purlifecottonwood.com<br></br> 📞 385-342-2598<br></br> 📍 1844 Fort Union Blvd, Suite #17 Cottonwood Heights, Utah</p>,
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }],
      images: [
        {
          src: PLMSkinnyShot1,
          caption: 'Caption example',
          purpose: 'The purpose of this content is...',
          equipment: 'The equipment used to creat this content is...'
        }, 
        {
          src: PLMSkinnyShot2,
          caption: 'Caption example',
          purpose: 'The purpose of this content is...',
          equipment: 'The equipment used to creat this content is...'
        }, 
        {
          src: PLMSkinnyShot2,
          caption: 'Caption example',
          purpose: 'The purpose of this content is...',
          equipment: 'The equipment used to creat this content is...'
        }],
    carousel: [
      {
        id: 1,
        images: [PLMSkinnyShot1, PLMSkinnyShot2],
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        id: 1,
        images: [PLMSkinnyShot1, PLMSkinnyShot2],
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      },
      {
        id: 1,
        images: [PLMSkinnyShot1, PLMSkinnyShot2],
        caption: 'Caption example',
        purpose: 'The purpose of this content is...',
        equipment: 'The equipment used to creat this content is...'
      }
    ]
  },
  {
    id: 2,
    backgroundImageUrl: `url(${BRHeader})`,
    name: 'Black Rock Mountain Resort',
    description: 'Luxury Townhomes and Condos located in Park City, Utah',
    cta: 'Contact Me',
    pDescriptorOne: 'Black Rock Resort is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    images: [PLMSkinnyShot1],
    video: [BHRTReel],
    carousel: [
      {
        id: 1,
        images: [PLMSkinnyShot1, PLMSkinnyShot2]
      },
      {
        id: 1,
        images: [PLMSkinnyShot1, PLMSkinnyShot2]
      }
    ]
  },
  {
    id: 3,
    backgroundImageUrl: `url(${BRHeader})`,
    name: 'Black Rock ',
    description: 'Luxury Townhomes and Condos located in Park City, Utah',
    cta: 'Contact Me',
    pDescriptorOne: 'Black Rock Resort is....',
    liOne: 'thing I did for them',
    liTwo:'another thing',
    liThree: 'another thing',
    pDescriptorTwo: 'Check out content below',
    images: [PLMSkinnyShot1],
    video: [BHRTReel],
    carousel: [
      {
        id: 1,
        images: [PLMSkinnyShot1, PLMSkinnyShot2]
      },
      {
        id: 1,
        images: [PLMSkinnyShot1, PLMSkinnyShot2]
      }
    ]
  }
]

export { brands }