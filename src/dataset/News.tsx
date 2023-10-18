import { INew } from "../types/types"
import news1 from '../imgs/news/new1.png'
import new2 from '../imgs/news/new2.png'
import new3 from '../imgs/news/new3.png'
import new4 from '../imgs/news/new4.png'
import new11 from '../imgs/news/new11.png'
import new12 from '../imgs/news/new12.png'
import new13 from '../imgs/news/new13.png'
import new21 from '../imgs/news/new21.png'
import new22 from '../imgs/news/new22.png'
import new23 from '../imgs/news/new23.png'
import new31 from '../imgs/news/new31.png'
import new32 from '../imgs/news/new32.png'
import new33 from '../imgs/news/new33.png'
import new41 from '../imgs/news/new41.png'
import new42 from '../imgs/news/new42.png'
import new43 from '../imgs/news/new43.png'

const News: INew[] = [
    {
        id: 1,
        header: 'NEW DROP',
        header2: 'NEW ADIDAS ORIGINALS FT. NiNE8',
        topic: "Time for sneaker school 👟 Did you know adidas Originals is the collective name and home of the brand's lifestyle sneaks and garms? This includes trainer royalty like the Superstar, Handball Spezial AND the Gazelle – styles that have been cool forever while making an impact on subcultures throughout the decades. So, to show off adi's latest drop, we enlisted music and creative collective NiNE8 to style these beauts up and weigh in on what it means to be truly original. Scroll on for the scoop!",
        author: 'Steven Potter',
        date: '25 August 2023',
        paragraphs: [
            {
                content: "From its beginnings in 1979 as a basketball shoe, to the shell-toed streetwear staple it is today, the adidas Superstar has been styling generations of creatives for over 40 years. With collabs spanning BAPE and Prada, the Superstar’s influence on fashion is legendary. Up top, NiNE8’s Lorenzo (rapper) and Elif (photographer and director), flexed these faves with a mix of vintage sportswear, graphic tees and baggy trews 😎",
                img: new11,
                imgDescription: 'SUPERSTAR – LORENZO & ELIF'
            },
            {
                content: "Originally designed to help athletes train in the 1960s, the adidas Gazelle really found its cultural place in the 90s when everyone from Britpop stans to football fans made it their thing – even Kate Moss loved to rep the Gazelle on the reg. There’s more than a touch of 90s-inspired styling to Nige and Lucy’s looks above ^. Rapper Nige opted for a terrace-ready ringer tee and Lucy – one of the collective's singers – went full blokecore with an old-school footie top. Silky styling skills, indeed 😮‍💨 ",
                img: new12,
                imgDescription: 'GAZELLE – NIGE & LUCY',

            },
            {
                content: "Like the Gazelles, the Handball Spezial found stans in many fandoms after migrating from handball courts to football terraces, and sticky gig floors the world over. It was the bold suede colourways – as seen on part of NiNE8's extended family Kat, who's a vocalist, and Max, a singer above – that took these sneaks from sports arenas to the streets. Cat's gone full colour clash while Max is serving a lesson in tonal autumn tekkers – which vibe is more you? 🤔 ",
                img: new13,
                imgDescription: 'HANDBALL SPEZIAL – MAX & KAT',

            }
        ],
        previewImg: news1,
    },
    {
        id: 2,
        header: 'NEW DROP',
        header2: 'NEW DROP: AW23 TOPMAN',
        topic: "We're srsly ready for all the autumn vibes 🧡 🍂 ☕ Well, almost – gotta take a peep at the new-new from Topman first! The brand's latest drop is all about bold lines, big shapes and plenty of drama 🎥 That excuse for a seasonal refresh you were looking for? This is it ✅ Scroll to see our fave picks of the szn 👇",
        author: 'Style Feed Staff',
        date: '22 September 2023',
        paragraphs: [
            {
                content: "A good coat is a must-have for chillier climes ⛄ and the longer lines of this beauty are bringing a fresher, smarter vibe this szn. This one delivers serious bizness vibes but is all play, promise! Plus, black = always timeless and goes with everything (AKA those autumn plans we know you’re lining up). ",
                img: new21,
                imgDescription: 'Topman Coat, coming soon!',

            },
            {
                content: "The chunky cable knit is back 👋 and it's a scorcha! The 🗝️ to refreshing your knits this szn is to go big and choose bold colours. That blue is giving all the summer-sky vibes 💙 and delivers the perf colour-pop against your muted autumn neutrals, too. ",
                img: new21,
                imgDescription: 'Topman Floria Chunky Cable Knit Jumper',

            },
            {
                content: "OK, Topman is keeping the oversized looks coming and we’re here for it. Crisp cotton, brushed flannel, corduroy, washed-out denim... the brand’s serving up all your fave fabrics in a fresh shirt shape that’s super-easy to wear. Tip: looks v fresh layered under a new longline coat, too. ",
                img: new21,
                imgDescription: 'Topman premium long sleeve extreme oversized formal shirt in blue stripe',

            }
        ],
        previewImg: new2,
    },
    {
        id: 3,
        header: 'TRENDS',
        header2: 'TRENDING NOW: PUNK',
        topic: "You know we're big fans of trends, and we just couldn't move into a new season without giving you a peep at the 🔥hottest🔥 one yet. Ya ready? 👀 It's all things punk! It takes inspo from the era of anarchy, but with a modern touch we can't get enough of. Let's break down the key pieces... scroll on for all you need to know 🤘",
        author: 'Symone Keisha',
        date: '18 October 2023',
        paragraphs: [
            {
                content: "Tees with stand-out slogans and statement prints are where it's at, and they give major punk NRG 🤘 Pro tip: don't be scurred to pair a fitted tee with larger-than-life trews. It's all about balance, bb!",
                img: new41,
                imgDescription: 'Warning! Graphic content coming soon. ',

            },
            {
                content: "While we love a graphic tee, LBR – we need some layers too coz autumn is on its way in. Enter: knitwear in chunky cuts and fuzzy textures 👋 Two-tone styles and punk motifs (hello, flames!) are an added bonus!",
                img: new42,
                imgDescription: 'THE KNITS TO KNOW',

            },
            {
                content: "Is it really punk unless there's some form of leather involved? Worn-in styles are an absolute win – it needs to look like you and your jacket have been by each other's side through the hard times, ya know. Make like our guy up top 👆 by embracing logos, patchwork and embroidery for that authentic touch 🎸",
                img: new43,
                imgDescription: '(FAUX) LEATHER LOVE',

            }
        ],
        previewImg: new3,
    },
    {
        id: 4,
        header: 'STYLE AND CULTURE',
        header2: 'THE BEST STREET STYLE FROM LFW',
        topic: "So London Fashion Week has come and gone, leaving us with a whirlwind of looks to chew over 🤤 With heavy-hitting designers like Burberry and JW Anderson putting London on the fashion map, the shows were full of the good stuff – and where there's a show, there's some serious street style to go with 🤩 Keep it locked for the four trends we're most excited about 👇",
        author: 'Symone Keisha',
        date: '20 October 2023',
        paragraphs: [
            {
                content: "Falling smack bang in the middle of September, LFW's street style is FULL of trans-seasonal inspo. Case in point: ✨the trench coat✨ Quintessentially British and 10/10 in the style stakes, it's a no-brainer. Keep it classic in an all-black 'fit like our guy on the left, or make it a little more edgy with biker boots, oversized cuts and fun accessories like our guy on the right 🐦",
                img: new31,
                imgDescription: "IT'S TRENCH TIME",

            },
            {
                content: "Scaled up or shrunk down, 'fits that fit different was the street stylers' MO this season. Whether you're supersizing your tanks for that larger-than-life vibe or cropping your shirts at rib height, proportion-play is an instant win – and one we see dominating the szn ahead ",
                img: new32,
                imgDescription: 'SCALE PRACTICE',

            },
            {
                content: "The trend that never gets old made an appearance at LFW this season, and us? OB-SESSED 👌 Double denim has 90s clout written all over it (one of our fave throwback eras btw!) and we're vibing over how each fashion-goer made it their own. Let the denim do the talking with a tonal block – or, mismatch your washes and throw in some colour for good measure",
                img: new33,
                imgDescription: 'DOUBLE THAT DENIM',

            }
        ],
        previewImg: new4,
    },
]
export default News