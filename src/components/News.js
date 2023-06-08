import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
    "source": {
    "id": null,
    "name": "Rolling Stone"
    },
    "author": "Brian Hiatt",
    "title": "Ed Sheeran Confesses: Tears, Trauma, and Those Bad Habits - Rolling Stone",
    "description": "When he became a dad, his ‘party boy’ days ended. Then tragedy struck, forcing him to face his hidden dark side — and hit his hottest creative streak.",
    "url": "https://www.rollingstone.com/music/music-features/ed-sheeran-new-album-subtract-tour-cover-story-interview-1234694319/",
    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/03/230117_Black_Tee_0005-1.jpg?crop=0px%2C0px%2C1629px%2C917px&resize=1600%2C900",
    "publishedAt": "2023-03-21T12:00:00Z",
    "content": "In case there’s any doubt, Ed Sheeran is well aware of the fact that he’s … Ed Sheeran. \r\n“I’m not an idiot,” he says, early in our acquaintance. “When you say in your office, ‘I’m gonna go and inter… [+35638 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Raja Razek, Elizabeth Wolfe",
    "title": "Colorado dentist accused of poisoning his wife had ordered arsenic and searched for 'how to make poison,' affidavit says - CNN",
    "description": "A Colorado dentist is accused of fatally poisoning his wife by putting arsenic in her protein shakes after ordering it online and making a number of suspicious internet searches in the weeks leading up to her death, including \"how to make poison,\" according t…",
    "url": "https://www.cnn.com/2023/03/21/us/colorado-dentist-wife-poisoning-internet-searches/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230320121203-james-toliver-craig-mug-shot.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-21T11:52:00Z",
    "content": "A Colorado dentist is accused of fatally poisoning his wife by putting arsenic in her protein shakes after ordering it online and making a number of suspicious internet searches in the weeks leading … [+4109 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Ben Morse",
    "title": "Indiana becomes second No. 1 seed to be knocked out of March Madness in successive days - CNN",
    "description": "First, it was the Stanford Cardinals -- then, it was the Indiana Hoosiers.",
    "url": "https://www.cnn.com/2023/03/21/sport/miami-indiana-march-madness-womens-sweet-16-spt-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230321101531-01-destiny-harden-miami-032023.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-21T11:25:00Z",
    "content": "First, it was the Stanford Cardinals then, it was the Indiana Hoosiers. \r\nMarch Madness is certainly living up to its name as Indiana became the second No. 1 seed to be knocked out of the womens NCAA… [+2009 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Jeff Cox",
    "title": "Treasury Secretary Yellen says the government could backstop more deposits if necessary to stop contagion - CNBC",
    "description": "The former Fed chair said authorities believe they have taken appropriate actions to stem liquidity problems, but will do more if needed.",
    "url": "https://www.cnbc.com/2023/03/21/treasury-secretary-yellen-says-the-government-could-backstop-more-deposits-if-necessary.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107209980-1678979808548-gettyimages-1248377832-AFP_33BG2NH.jpeg?v=1679398827&w=1920&h=1080",
    "publishedAt": "2023-03-21T11:24:17Z",
    "content": "Treasury Secretary Janet Yellen said Tuesday the government is ready to provide further guarantees of deposits if the banking crisis worsens.\r\nIn remarks prepared for a speech to the American Bankers… [+3431 chars]"
    },
    {
    "source": {
    "id": "financial-times",
    "name": "Financial Times"
    },
    "author": "Max Seddon, Polina Ivanova",
    "title": "Xi Jinping invites Vladimir Putin on state visit to China - Financial Times",
    "description": "Chinese leader shows support for his Russian counterpart on first trip to Moscow since its invasion of Ukraine",
    "url": "https://www.ft.com/content/ae0bb3f6-4cc3-49ca-a0e6-93a8e7cc62cc",
    "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Feaa7094b-3057-44e2-b11f-cae7bdffcc38.jpg?source=next-opengraph&fit=scale-down&width=900",
    "publishedAt": "2023-03-21T10:58:34Z",
    "content": "Xi Jinping has invited Vladimir Putin to visit China this year, a big gesture of support after the International Criminal Court issued an arrest warrant accusing the Russian president of war crimes l… [+3274 chars]"
    },
    {
    "source": {
    "id": "the-hill",
    "name": "The Hill"
    },
    "author": "Syeda Abbas, Jeremy Tanner",
    "title": "Cases of rare tick-borne disease on the rise in 8 states, CDC says - The Hill",
    "description": "Tick-borne illness cases in the United States are up 25% since 2011, according to the Centers for Disease Control and Prevention. Among the cases is a rare disease, babesiosis, which is found mainly in the Northeast and Midwest.",
    "url": "https://thehill.com/homenews/3909556-cases-of-rare-tick-borne-disease-on-the-rise-in-8-states-cdc-says/",
    "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/03/Lyme_Disease_New_England_10662_54744508_ver1.0-e1679393151879.jpg?w=1280",
    "publishedAt": "2023-03-21T10:49:27Z",
    "content": "Skip to content\r\nNEW HAVEN, Conn. (WTNH) – Tick-borne illness cases in the United States are up 25% since 2011, according to a new report from the Centers for Disease Control and Prevention, includin… [+2725 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Steve Gardner",
    "title": "WBC schedule championship USA vs. Japan: Streaming, how to watch - USA TODAY",
    "description": "Team USA goes for a second consecutive World Baseball Classic championship tonight, taking on two-time winner Japan and starting pitcher Yu Darvish.",
    "url": "https://www.usatoday.com/story/sports/mlb/2023/03/21/world-baseball-classic-schedule-championship-usa-vs-japan/11508342002/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/20/USAT/8d7c8290-04fc-40cc-baa3-8f0211bd5cc0-USP_Baseball__World_Baseball_Classic_-_Semifinal_1.jpg?crop=3676,2068,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
    "publishedAt": "2023-03-21T10:31:44Z",
    "content": "The 2023 World Baseball Classic comes to a close with one last game, pitting the defending champion Team USA vs. two-time winner Japan for the title.\r\nDespite a couple high-profile injuries, it's bee… [+2679 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Holly Ellyatt",
    "title": "Ukraine war live updates: Xi invites Putin to China as talks in Moscow continue; Russian mercenaries say Kyiv is preparing counterattack - CNBC",
    "description": "It's the second day of Chinese President Xi Jinping's state visit to Moscow Tuesday. He and President Putin could sign a number of bilateral agreements today.",
    "url": "https://www.cnbc.com/2023/03/21/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/105446461-1536763708632rts211io.jpg?v=1679393180&w=1920&h=1080",
    "publishedAt": "2023-03-21T10:06:00Z",
    "content": "Chinese President Xi Jinping said Tuesday that he's invited his Russian counterpart Vladimir Putin to visit China this year, Russian news agencies reported Tuesday.\r\n\"I yesterday invited President Pu… [+888 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Helen Regan, Josh Pennington, Tatiana Arias, Elise Garofalo, Sarah Dean",
    "title": "Russian cruise missiles destroyed in strike in Crimea, Ukraine Defense Ministry says - CNN",
    "description": "Ukraine's Ministry of Defense said late Monday that a strike destroyed Russian \"Kalibr\" cruise missiles that were being transported by train in the town of Dzhankoi, in Russian-occupied Crimea.",
    "url": "https://www.cnn.com/2023/03/21/europe/crimea-russian-missiles-destroyed-ukraine-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230321120600-crimea-blast-0321.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-21T09:35:00Z",
    "content": "Ukraines Ministry of Defense said late Monday that a strike destroyed Russian Kalibr cruise missiles that were being transported by train in the town of Dzhankoi, in Russian-occupied Crimea.\r\nUkraini… [+2806 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Will Carless",
    "title": "Trump warns of arrest, calls for protest, but online support is muted - USA TODAY",
    "description": "Rather than organizing protests, prominent Trump supporters online are  driving a different narrative: That any public events are a law enforcement \"trap.\"",
    "url": "https://www.usatoday.com/story/news/nation/2023/03/21/trump-warns-arrest-calls-protest-but-online-support-muted/11511264002/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/21/USAT/923b967c-bce9-470b-a414-21b83ef30eb3-VPC_NYC_SECURITY___INDICTMENT_GETTY.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp",
    "publishedAt": "2023-03-21T09:30:39Z",
    "content": "\"PROTEST, TAKE OUR NATION BACK!\"\r\n\"WE MUST SAVE AMERICA! PROTEST, PROTEST, PROTEST!!!\"\r\nSo ended two posts from former President Donald Trump, who has been posting incessantly often in all caps on hi… [+6836 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "UBS Credit Outlook Cut to Negative on Credit Suisse Deal - Bloomberg Television",
    "description": "UBS Group AG's credit outlook was cut to negative from stable by S&P Global Ratings and Moody's Investors Service following its emergency takeover of Credit ...",
    "url": "https://www.youtube.com/watch?v=WHReSGtIG4w",
    "urlToImage": "https://i.ytimg.com/vi/WHReSGtIG4w/hqdefault.jpg",
    "publishedAt": "2023-03-21T09:00:04Z",
    "content": null
    },
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "https://www.engadget.com/about/editors/richard-lai",
    "title": "Oppo's Find X6 Pro packs a 1-inch sensor and a periscopic camera | Engadget - Engadget",
    "description": "Oppo's Find X6 Pro packs a 1-inch sensor for its main camera, along with a periscopic camera to offer 3x optical zoom or 6x in-sensor zoom.",
    "url": "https://www.engadget.com/oppos-find-x6-pro-packs-a-1-inch-sensor-and-a-periscopic-camera-083210934.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Aws9HeqjqMJqui61L2afYA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/830f4490-c7b4-11ed-afcf-ede7f2442acd.cf.jpg",
    "publishedAt": "2023-03-21T08:33:37Z",
    "content": "We were left impressed with Oppo's Find X5 Pro last year, so naturally, we have high expectations for its successor. As announced earlier, the upcoming Find X6 Pro meets the basic requirements you'd … [+4589 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Taiwan president to visit US but no word on House Speaker meeting - Reuters.com",
    "description": "Taiwan President Tsai Ing-wen will make sensitive stopovers in the United States on her way to and from Central America that China's foreign ministry condemned on Tuesday, but Taipei would not confirm a meeting with U.S. House Speaker Kevin McCarthy.",
    "url": "https://www.reuters.com/world/taiwan-president-visit-us-no-word-house-speaker-meeting-2023-03-21/",
    "urlToImage": "https://www.reuters.com/resizer/Uqz3fFGpGRAmjV_rRg0PtzKI4_8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UV6DUHLS25JMZPYDBO2AYNF4GQ.jpg",
    "publishedAt": "2023-03-21T08:28:00Z",
    "content": "TAIPEI/WASHINGTON, March 21 (Reuters) - Taiwan President Tsai Ing-wen will make sensitive stopovers in the United States on her way to and from Central America that China's foreign ministry condemned… [+4330 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Rajesh Pandey",
    "title": "The Google Pixel Watch's March update makes it a better dumb watch - Android Police",
    "description": "The watch can now tell the time even when it is powered down",
    "url": "https://www.androidpolice.com/google-pixel-watch-march-update-better-dumb-watch/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/google-pixel-watch-plate.jpg",
    "publishedAt": "2023-03-21T08:21:00Z",
    "content": "The Google Pixel Watch has been on the market for a few months. So far, the wearable has only received one major firmware post-launch in December 2023, with all other monthly updates being minor and … [+3555 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Fox Business"
    },
    "author": "Eric Revell",
    "title": "Regional and community banks rally to call for FDIC backup - Fox Business",
    "description": "Mid-sized regional banks and community banks around the country are urging regulators to consider lifting the FDIC's threshold for uninsured deposits after they granted exceptions.",
    "url": "https://www.foxbusiness.com/markets/regional-community-banks-rally-call-for-fdic-backup",
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/0/0/GettyImages-1248470806.jpg?ve=1&tl=1",
    "publishedAt": "2023-03-21T08:03:14Z",
    "content": "Mid-sized regional banks\r\n and their community banking counterparts around the country are calling on the Federal Deposit Insurance Corporation (FDIC) to insure all bank deposits to prevent bank runs… [+4560 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Former US President Donald Trump Tells Supporters He'll Be Arrested - Voice of America",
    "description": "Manhattan district attorney could indict Trump over 2016 Stormy Daniels paymentOriginally published at - https://www.voanews.com/a/former-us-president-donald...",
    "url": "https://www.youtube.com/watch?v=U79T0guts3c",
    "urlToImage": "https://i.ytimg.com/vi/U79T0guts3c/maxresdefault.jpg",
    "publishedAt": "2023-03-21T07:20:53Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "FRANCE 24 English"
    },
    "author": "NEWS WIRES",
    "title": "Dozens arrested as French protests continue after government survives no-confidence vote - FRANCE 24 English",
    "description": "Dozens of people were arrested across France after sporadic protests broke out hours after President Emmanuel Macron's government narrowly survived a no-confidence motion in parliament on Monday over a deeply unpopular pension reform.",
    "url": "https://www.france24.com/en/europe/20230321-dozens-arrested-as-french-protests-continue-after-government-survives-no-confidence-vote",
    "urlToImage": "https://s.france24.com/media/display/a3edddba-c7b5-11ed-9c18-005056a90321/w:1280/p:16x9/2023-03-20T212443Z_1917016817_RC2WXZ9DHON4_RTRMADP_3_FRANCE-PENSIONS-PROTESTS.JPG",
    "publishedAt": "2023-03-21T07:13:40Z",
    "content": "Dozens of people were arrested across France after sporadic protests broke out hours after President Emmanuel Macron's government narrowly survived a no-confidence motion in parliament on Monday over… [+2367 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "Solar storm DANGER! NASA spots giant hole on Sun blasting solar winds towards Earth - HT Tech",
    "description": "Solar storm threat looms on the Earth as a massive coronal hole opens up on the Sun and spews fast-moving solar winds towards the Earth. NASA Solar Dynamics Observatory has detected the development.",
    "url": "https://tech.hindustantimes.com/tech/news/solar-storm-danger-nasa-spots-giant-hole-on-sun-blasting-solar-winds-towards-earth-71679380852980.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/21/1600x900/coronalhole_sdo_blank_1679380999391_1679381014363_1679381014363.jpg",
    "publishedAt": "2023-03-21T06:46:30Z",
    "content": "Yesterday, March 20, it was reported that the Earth may suffer a glancing blow from an incoming coronal mass ejection (CME) today. While astronomers keep an eye out on its development, a far more con… [+2340 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Kelsey Ables",
    "title": "LAUSD workers strike: Los Angeles schools to close Tuesday - The Washington Post",
    "description": "Los Angeles Unified School District teachers are not directly involved in the dispute, but a major union has said that educators will not cross the picket line.",
    "url": "https://www.washingtonpost.com/education/2023/03/20/los-angeles-school-district-strike/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/03-21-2023/t_343e443dd36c496f9406b963161cf53c_name_strike.png&w=1440",
    "publishedAt": "2023-03-21T06:17:00Z",
    "content": "Comment on this story\r\nLos Angeles public schools will be closed Tuesday after attempts to hold last-minute labor discussions with school support workers failed to avert a massive strike, the distric… [+3339 chars]"
    },
    {
    "source": {
    "id": "independent",
    "name": "Independent"
    },
    "author": "Oliver O'Connell",
    "title": "Trump launches furious lewd, homophobic attack on DeSantis as Florida governor muted on indictment - The Independent",
    "description": "Former president lashes out on Truth Social after Florida governor’s dig at him over possible indictment",
    "url": "https://www.independent.co.uk/news/world/americas/us-politics/desantis-trump-indictment-truth-social-b2304837.html",
    "urlToImage": "https://static.independent.co.uk/2023/03/17/13/States_Legislation_Immigration_01268.jpg?quality=75&width=1200&auto=webp",
    "publishedAt": "2023-03-21T06:06:30Z",
    "content": "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nDonald Trump launched an especially below-the-belt swipe… [+2524 chars]"
    }
    ]
  constructor(){
    super();//we have to write super();
    //  a constructpr only runs when class object is created. 
    console.log("I am constructor from news component.")
    this.state={
        articles:this.articles,
        loading:false,
    }
  }
  render() {
    return (
      <div className='conatiner my-3'style={{margin:"200px"}}>
        <h3>News Doremon Top HeadLines:-</h3>
        <div className="row">
        {this.state.articles.map((element)=>{
          
          return <div className="col-md-4"><NewsItem title={element.title} description={element.description} img_url={element.urlToImage} url={element.url}/>
          </div>
        
        })}

          {/* <div className="col-md-4"><NewsItem title="My title" description="My description." img_url="https://th.bing.com/th/id/OIP.CmNsm2nHqdomNR987saO7AHaEK?pid=ImgDet&rs=1" newsUrl= />
          </div>
        

          <div className="col-md-4"><NewsItem title="My title" description="My description." img_url="https://th.bing.com/th/id/OIP.Z6O34ZAThpQ2Iebh2InxFAHaEK?pid=ImgDet&rs=1" newsUrl="To do"/>
          </div>
         */}
        </div>
      </div>
    )
  }
}

export default News
