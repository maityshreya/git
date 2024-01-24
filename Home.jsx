import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill,Bs2SquareFill, BsPeopleFill, BsFillBellFill,Bs0SquareFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Page A',
          end_year: "",
          intensity: 6,
          sector:"Energy",
          topic:"gas",
          region:"Northern America",
          relevance:2,
          country:"United State of America",
          likelihood:3,
          start_year:"",
          insight:"Annual Energy Outlook",
          pestle:"Industries",
        },
        {
          name: 'Page B',
          end_year: "",
          intensity: 6,
          sector: "Energy",
          topic: "oil",
          insight: "Annual Energy Outlook",
          region: "Northern America",
          start_year: "",
          impact: "",
          country: "United States of America",
          relevance: 2,
          pestle: "Industries",
          likelihood: 3

        },
        {
          name: 'Page C',
          end_year: "",
          intensity: 6,
          sector: "Energy",
          topic: "consumption",
          insight: "Annual Energy Outlook",
          region: "Northern America",
          start_year: "",
          impact: "",
          country: "United States of America",
          relevance: 2,
          pestle: "Industries",
          likelihood: 3
        },
        {
          name: 'Page D',
          end_year: "",
          intensity: 6,
          sector: "Environment",
          topic: "oil",
          insight: "WRI Partnership Aims to Foster Supply Chain Transparency, Zero-Deforestation Strategies",
          region: "Central America",
          start_year: "",
          impact: "",
          country: "Mexico",
          relevance: 3,
          pestle: "Environmental",
          likelihood: 2
        },
        {
          name: 'Page E',
          "end_year": "",
            "intensity": 6,
            "sector": "",
            "topic": "market",
            "insight": "N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report",
            "url": "http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm",
            "region": "World",
            "start_year": "",
            "impact": "",
            "added": "January, 19 2017 00:55:54",
            "published": "January, 18 2017 00:00:00",
            "country": "",
            "relevance": 2,
            "pestle": "Economic",
            "source": "SBWire",
            "title": "Polymerization will remain top 3 end-users in global n-Hexane Market.",
            "likelihood": 3
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>LIKELIHOOD</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>RELEVANCE</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COUNTRY</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            
            <div className='card'>
                <div className='card-inner'>
                    <h3>CITY</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>TOPICS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>40</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>REGION</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>48</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>YEAR</h3>
                    <Bs2SquareFill className='card_icon'/>
                </div>
                <h1>10</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>INTENSITY</h3>
                    < BsFillArchiveFill Name='card_icon'/>
                </div>
                <h1>40</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home