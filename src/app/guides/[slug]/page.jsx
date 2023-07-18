'use client'

import { useEffect, useState } from "react"
import BreadcrumbsAndDetails from "../../components/GuidesComponents/BreadcrumbsAndDetails"
import GuideFacts from "../../components/GuidesComponents/GuideFacts"
import { useParams } from "next/navigation"

export default function GuideDetailsPage() {
  const [guides, setGuides] = useState([])
  const [detailPage, setDetailPage] = useState()
  const { slug } = useParams()

  useEffect(() => {
      setGuides(allGuides)
  }, [])

  const allGuides = [
      {
        name: 'Alex Adler',
        slug: 'alex-adler',
        featured_pic: '/images/captains/alex-adler.png',
        backcountry: false,
        offshore: true,
        business_name: "the Kalex",
        about_me: "I've been charter fishing as the owner-operator aboard the Kalex out of Islamorada's famed Bud N' Mary's Marina since 1976. Prior to moving to the Keys, I fished out of Bahia Pez Vela Lodge in Costa Rica immediately out of high school and rapidly became known as an innovator in saltwater fishing. Once in the Keys, I learned from some of the best in the business including legendary captains like Allan Starr, Don Gurgulio, Sarge Warner, Cecil Keith, and Jimmy Albright. Harold Adler, my father, was also a major mentor in my fishing career. It wasn’t long after my move to the Keys that I began an impressive series of tournament wins, including winning the 1981 Bimini Blue Marlin Tournament, and twice winning the Cat Cay Tuna Tournament. I have won countless tournaments in the Florida Keys, including the Florida Keys Triple Crown Series and the Florida Keys Gold Cup events, yet I am also an expert at all aspects of Keys fishing, including dolphinfish and reef fishing. Recently I has been selected as a recipient of the IGFA Tommy Gifford.",
        boats: [`48' Custom Marine w/ twin Cummins`],
        dock: "Bud N' Mary's",
        specialty: 'Light tackle, live bait, kite fishing, family fun fishing, specialty charters.',
        fun_fact: "Many celebrities have chartered the Kalex including Dale Earnhardt Sr., Payne Stewart, Andy Garcia, Peter Benchley, and Yoenis Cespedes.",
        days_off: "Boat maintenance, catching bait, resting."
      },
      {
        name: 'Mason Baker',
        slug: 'mason-baker',
        featured_pic: '/images/captains/mason-baker.png',
        backcountry: true,
        offshore: false,
        business_name: null,
        about_me: "My name is Mason Baker, I am a second generation fishing guide here in islamorada. I am 23 years old and since I got my first boat when I was 11 years old I've spent more time on the water than I've spent on land. I've explored all aspects of what Islamorada has to offer on the water from spearfishing and lobstering to inshore and offshore fishing. My passion lies on the crystal clear flats up and down the Florida Keys chasing bonefish, tarpon and permit. I was lucky to grow up in Islamorada where I learned not only how to fish but how to safely navigate through out the waterways and mangrove islands all over the Florida Keys.",
        boats: [`16' Dolphin Super Skiff w/ 70HP Yamaha`],
        dock: "World Wide Sportsman",
        specialty: 'Fly fishing, sight fishing bonefish, tarpon, permit, snook, and redfish',
        fun_fact: "When I was in high school, I was on the reef yellowtailing with my friend and his uncle. We noticed a capsized boat in the distance. We assisted the family in the water and called the coast guard. We ended up on the news the next week. Half my customers google me and they find the news article instead of my business.",
        days_off: "I'm always on the water. I may be flats fishing on my boat but I may be offshore fishing or diving as well with friends. My goal is always to learn as much as I can about the fishery we have here."
      },
      {
        name: 'Chris Barron',
        slug: 'chris-barron',
        featured_pic: '/images/captains/chris-barron.png',
        backcountry: true,
        offshore: true,
        business_name: 'Stray Cat Charters',
        about_me: "Originally from Abington, MA. I came to Islamorada in 1979 and started fishing offshore. After that I decided to buy a skiff and start my own business fishing the backcountry. Fishing is my passion. I have fished many tournaments throughout my time and I am a Mercury Pro Team Guide. Now, my focus and enjoyment comes from giving my customers a quality experience on the water for the best fishing possible. I am married to my wife, Christine, and we have two successful children. We are just a fishing family, we enjoy fishing together whenever we get the chance. A family that fishes together stays together.",
        boats: [`18' Maverick w/ 150HP Mercury`, `24' Everglades`],
        dock: 'World Wide Sportsman',
        specialty: 'Live bait fishing for tarpon and snook',
        fun_fact: "My wife has the same name as me and we adopt Stray Cats hence Stray Cat Charters.",
        days_off: "Besides taking my wife fishing, I really enjoy grilling on my Traeger, smoking fish and preparing feasts for family and friends."
      },
      {
        name: 'Hunter Barron',
        slug: 'hunter-barron',
        featured_pic: '/images/captains/hunter-barron.png',
        backcountry: false,
        offshore: true,
        business_name: "Endeavor Sportfishing",
        about_me: "Born in Islamorada, my passion for fishing began when I was young. I was raised in the charter fishing industry by my dad Captain Chris Barron of Stray Cat Charters. Acquiring extensive knowledge of both offshore and the backcountry, I became very competitive in the professional fishing world. Right out of high school, I attained my captains license in 2006 and started fishing aboard the Catch 22 out of Bud N' Mary’s Marina. My employment with the Catch 22 started as a mate and then being promoted to captain for the Stanczyk Family. I've found lots of success on the water with many tournament wins and accomplishments like the 2011 IGFA World Championship.",
        boats: [`40' Sportfish w/ SeaKeeper `],
        dock: "Bud N' Mary's",
        specialty: 'Sailfish, mahi, wahoo, snapper, grouper, and a possible marlin to name a few.',
        fun_fact: "We caught 47 sailfish with Gunner Guthrie on the Catch 22 which was the Islamorada Record of 2012.",
        days_off: "Making sushi & wahoo spoons, and cooking on my Traeger grill for friends."
      },
      {
        name: 'Rich Burson',
        slug: 'rich-burson',
        featured_pic: '/images/captains/rich-burson.png',
        backcountry: true,
        offshore: false,
        business_name: "Rufishingyet Charters",
        about_me: "I am a South Florida native who has been fishing the local waters from Biscayne Bay to Islamorada for over 30 years. After obtaining my captain's license, I have been chartering light tackle and fly fishing enthusiasts in the Key Largo area and Everglades National Park.",
        boats: [`Ranger 191 Cayman w/ 150HP Mercury`],
        dock: "Postcard Inn Marina",
        specialty: 'Sightfishing bonefish, permit, snook, redfish, tarpon.',
        fun_fact: "My parents tied me up on the dock in diapers while they fished.",
        days_off: "Spending time with family and kids fishing, snorkeling, wakeboarding."
      },
      {
        name: 'Matt Davis',
        slug: 'matt-davis',
        featured_pic: '/images/captains/matt-davis.png',
        backcountry: false,
        offshore: true,
        business_name: 'TAN MAN Charters',
        about_me: "I grew up in Key Largo and Islamorada, and have been fishing these local waters my entire life, and professionally for the last 20 years. I have had the privelege of fishing and winning some the most prestigious tournaments in the area, and have been fishing at the legendary Bud N' Mary's Marina for over 15 years.",
        boats: [`44' Henriques Sportfish w/ dual 450HP Cummins`],
        dock: "Bud N' Mary's",
        specialty: 'Sailfish, dolphin, snapper, grouper, king fish, tuna, cobia, amberjack, wahoo, permit, sharks, African pompano, and deep drop species',
        fun_fact: "My wife Lindsay is a Realtor and help you with your home search. I also went to school with Hunter Barron.",
        days_off: "Spending time with my wife and two children, grilling, relaxing with friends."
      },
      {
        name: 'Ross DeMarzo',
        slug: 'ross-demarzo',
        featured_pic: '/images/captains/ross-demarzo.png',
        backcountry: false,
        offshore: true,
        business_name: "Catchalottafish Charters",
        about_me: "I was born in Philadelphia and have been fishing in Islamorada since 2001. I worked on the Predator at Bud N' Marys Marina until moving to World Wide Sportsman.",
        boats: [`34' Freeman`],
        dock: "World Wide Sportsman",
        specialty: 'Live bait, reef, wrecks, sailfish, mahi, tuna.',
        fun_fact: "N/A",
        days_off: "N/A"
      },
      {
        name: 'Jim Fickling',
        slug: 'jim-fickling',
        featured_pic: '/images/captains/jim-fickling.png',
        backcountry: true,
        offshore: false,
        business_name: "Can-O-Worms Fishin'",
        about_me: "My father was a Green Beret stationed in Fayetteville, NC and it was the lakes of North Carolina where my passion for fishing began. In my early adult years I moved to Destin, FL and discovered off-shore fishing. My love for that led me to the fabulous Florida Keys. After fishing for many years with respected, local captains, I established Can-O-Worms Fishin’ out of the famous World Wide Sportsman Marina. I've successfully shared my enthusiasm and knowledge of backcountry fishing with many people, from all around the world and of many different skillsets. I enjoy sharing historical knowledge of the Keys and family experiences. I am fortunate enough to not only enjoy skinny-water fishing, but also continue off-shore charter and tournament fishing.",
        boats: [`18' Actioncraft`],
        dock: "World Wide Sportsman",
        specialty: 'Live bait fishing.',
        fun_fact: "I can stand on my head and spit wooden nickels.",
        days_off: "Fishing with my son."
      },
      {
        name: 'Mark Gilman',
        slug: 'mark-gilman',
        featured_pic: '/images/captains/mark-gilman.png',
        backcountry: true,
        offshore: false,
        business_name: "Rufishingyet Charters",
        about_me: "I'm an all-around backcountry guide.",
        boats: [`Ranger 191 Cayman w/ 150HP Mercury`],
        dock: "Postcard Inn Marina",
        specialty: 'Live bait, fly fishing bridges flats.',
        fun_fact: "I manage race horses as my second passion.",
        days_off: "Manage my business."
      },
      {
        name: 'Steve Griswold',
        slug: 'steve-griswold',
        featured_pic: '/images/captains/steve-griswold.png',
        backcountry: true,
        offshore: false,
        business_name: null,
        about_me: "I have been fishing in Islamorada since I was a young kid and I have been guide fishing for 26 years.",
        boats: [`24' Pathfinder Bay Boat w/ 300HP Yamaha`],
        dock: "World Wide Sportsman",
        specialty: 'Catching fish and having fun with my clients.',
        fun_fact: "N/A",
        days_off: "Golfing, hiking, working on classic cars."
      },
      {
        name: 'John Guastavino',
        slug: 'john-guastavino',
        featured_pic: '/images/captains/john-guastavino.png',
        backcountry: true,
        offshore: false,
        business_name: 'Pisces Connections Charters',
        about_me: "I was born and raised on the Chesapeake Bay on the Eastern shore of Maryland and have been boating and fishing since I was five years old.",
        boats: [`18' Dolphin Backcountry Skiff w/ 175HP Mercury`],
        dock: "World Wide Sportsman",
        specialty: 'Catching fish and keeping my anglers happy.',
        fun_fact: "I have the same birthdate (same year) as Christine Barron, wife of our venerable Capt. Chris Barron!",
        days_off: "Baitfishing, tending to my boat and fishing gear, cooking, exploring, swimming, walking, playing golf."
      },
      {
        name: 'Tony Horsley',
        slug: 'tony-horsley',
        featured_pic: '/images/captains/tony-horsley.png',
        backcountry: true,
        offshore: false,
        business_name: "Bowed Up Fishing Charters",
        about_me: "I have eighteen years of experience and will guide you through a fishing adventure of a lifetime!",
        boats: [`22' Pathfinder`],
        dock: "World Wide Sportsman",
        specialty: 'Tarpon, snook, redfish, trout, snapper.',
        fun_fact: "I love building and woodworking, deer hunting, and having fun at the bar after work with my friends and clients.",
        days_off: "Boat maintenance, fixing nets and rods."
      },
      {
        name: 'Zach Jones',
        slug: 'zach-jones',
        featured_pic: '/images/captains/zach-jones.png',
        backcountry: true,
        offshore: false,
        business_name: 'Zoned In Charters',
        about_me: "I have been fishing ever since I was a child. I fell in love with the flats 9 years ago and never looked back. It's the feeling of stalking out the fish we catch that gets me going. I was born in North Carolina, hooking bass, chasing reds, and fishing for trout in the Asheville Mountains. This place definitely stole me away because of its abundance of species and explosive action! I love all types of fishing and welcome all types, and whether you're spinning or fly fishing, I will put you on them.",
        boats: [`Pathfinder 2400`, `Beavertail Elite Skiff`],
        dock: "World Wide Sportsman",
        specialty: 'Backcountry and flats fishing.',
        fun_fact: "I am a saltwater aquarium nerd and a Brazilian jiu-jitsu freak.",
        days_off: "Practicing Brazilian jiu-jitsu, crossfit, or you can catch me throwing the fly and getting rejected by the permit on the flat."
      },
      {
        name: 'Lance Keene',
        slug: 'lance-keene',
        featured_pic: '/images/captains/lance-keene.png',
        backcountry: true,
        offshore: false,
        business_name: 'Steelhead Hunter Charters',
        about_me: "I'm a full-time fishing guide half the season in the Florida Keys, and the other half in Michigan chasing salmon and steelhead.",
        boats: ['2400 Bay Ranger w/ 250HP Yamaha'],
        dock: 'World Wide Sportsman',
        specialty: 'Snapper, snook, tarpon, permit',
        fun_fact: "I like to fish bass tournaments in Northern Michigan.",
        days_off: "I still spend time on the water trying new techniques, catching bait, or just trying to catch fish for myself."
      },
      {
        name: 'Steve Lavoie',
        slug: 'steve-lavoie',
        featured_pic: '/images/captains/steve-lavoie.png',
        backcountry: true,
        offshore: false,
        business_name: null,
        about_me: "N/A",
        boats: [`17' Maverick, 70HP`],
        dock: "World Wide Sportsman",
        specialty: 'Sightfishing bonefish, permit, snook, redfish, tarpon.',
        fun_fact: "My son is an excellent baseball player and I enjoy traveling along on his baseball quest.",
        days_off: "Cycling and running with my German Shorthaired Pointers."
      },
      {
        name: 'Rich Mitchell',
        slug: 'rich-mitchell',
        featured_pic: '/images/captains/rich-mitchell.png',
        backcountry: true,
        offshore: false,
        business_name: "Ichthyophile Charters",
        about_me: "I have been a fisherman since the age of two. I received a degree in marine biology and worked in the seafood industry in Pennsylvania. I have been guiding anglers to faboluous fishing memories for over 30 years. My knowledge and passion for the natural environment in the Keys makes a trip with me a learning experience as well as an adventure.",
        boats: [`18' Maverick`],
        dock: "Postcard Inn Marina",
        specialty: 'Eco tours and light tackle sportfishing.',
        fun_fact: "Due to my education in biology, I have a fascination with early marine science. I once owned an antique store called 'Ichthyophile', meaning 'Fish Lover'. My house displays hand colored fish prints dating back to the 1700s.",
        days_off: "Relaxing and tending to my gardens."
      },
      {
        name: 'Drew Nobregas',
        slug: 'drew-nobregas',
        featured_pic: '/images/captains/drew-nobregas.png',
        backcountry: true,
        offshore: false,
        business_name: 'Fishy Business Charters',
        about_me: "I am a second generation Islamorada fishing guide and native. After graduating from Florida State Universtiy, I pursued my passion as a full-time fishing guide in 2014. I have extensive knowledge in fly fishing, using artificial lures, and bait fishing all over the world. I have fished in Alaska for halibut and salmon, the Northeast for striper, the Gulf Coast for giant tuna, the Bahamas for blue marlin, Belize for the elusive permit on fly, and a laundry list of many other places to sharpen my skills as a guide.",
        boats: [`22' Pathfinder w/ 200HP Yamaha`],
        dock: "World Wide Sportsman",
        specialty: 'Family fun fishing.',
        fun_fact: "I was a member of the Florida State Fishing Team and competed for a year.",
        days_off: "Sneaking away to the golf course."
      },
      {
        name: 'Mike Venezia',
        slug: 'mike-venezia',
        featured_pic: '/images/captains/mike-venezia.png',
        backcountry: true,
        offshore: false,
        business_name: 'Boned Up Charters',
        about_me: "I was born and raised in Florida, and have been fishing since I was able to walk. I have been coming to the Keys since the age of three and being a full-time resident for almost 20 years, I have always loved and enjoyed backcountry fishing. I have been operating out the world renowned Bud n' Mary's for over 10 years.",
        boats: [`17'5" Maverick Master Angler w/ 150HP Mercury`, `17'8" Hells Bay Whipray Pro w/ 70HP Yamaha`],
        dock: "Bud N' Mary's",
        specialty: 'Light tackle sport fishing for tarpon and snook',
        fun_fact: "Did you know that manatees have toenails? I have found and rescued three turtles.",
        days_off: "Taking my kids fishing and spending time with my family."
      },
      {
        name: 'Ryan Wentzel',
        slug: 'ryan-wentzel',
        featured_pic: '/images/captains/ryan-wentzel.png',
        backcountry: false,
        offshore: true,
        business_name: "4reel Charters",
        about_me: "I was born and raised in South Florida and have been fishing in the Keys as long as I can remember. After I graduated from high school I started deck handing on boats in Venice, Louisiana. The intense grind and long stretches of fishing they do in Venice taught me the work ethic needed to be a charter fisherman, but it also instilled in me an even deeper passion for the ocean. Working on those boats is what inspired me to take on the challenge of starting my own business in Islamorada where my brother and I grew up fishing. My goal is to work hard to put people on fish and be able to show our clients the best day possible every day!",
        boats: [`2021 37' Sea Vee w/ Triple Mercury 300s`],
        dock: "World Wide Sportsman",
        specialty: 'Offshore, reef/wreck fishing.',
        fun_fact: "I'm a lefty and a dog lover.",
        days_off: "Sitting at Fish Co at the end of the day with the captains talking about our fishing."
      },
  ]

  useEffect(() => {
      const updateDetailPage = () => {
        if (guides) {
          for (let i = 0; i < guides.length; i++) {
              if (guides[i].slug === slug) {
              setDetailPage(guides[i])
              break;
              }
          }
        }
      };
  
      if (detailPage) {
        localStorage.setItem('guide', JSON.stringify(detailPage));
      } else {
        const storedGuide = JSON.parse(localStorage.getItem('guide'));
        setDetailPage(storedGuide);
      }
  
      updateDetailPage();
  
    }, [slug, guides, detailPage, setDetailPage]);

  return (
      <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
          <div className="mx-6 lg:mx-20 mb-16">
              <BreadcrumbsAndDetails guideData={detailPage} />
              <GuideFacts guideData={detailPage} />
          </div>
      </div>
  )
}