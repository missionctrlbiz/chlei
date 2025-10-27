import Link from 'next/link'

export const metadata = {
    title: 'Thematics Areas - CLHEI',
}

export default function ThematicsPage() {
    return (
        <main className="container py-8">
            <h1>Thematics Areas – Community Links & Human Empowerment Initiatives</h1>

            <p>
                CLHEI adopts a multi-sectoral approach in the design of her Humanitarian Response and Development programs. These multi-sectoral actions address the social, environmental and economic factors that influence the livelihood of vulnerable, marginalized and displaced populations at the local, national and global levels.
            </p>

            <h2>Sectors</h2>

            <section>
                <h3>Humanitarian Response</h3>
                <ul>
                    <li>Emergency preparedness and response</li>
                    <li>Early recovery</li>
                    <li>Social support</li>
                    <li>Rehabilitation and integration</li>
                    <li>Protection</li>
                </ul>
            </section>

            <section>
                <h3>Health</h3>
                <p>Enhancing access to safe, quality and affordable healthcare services for all through:</p>
                <ul>
                    <li>Nutrition</li>
                    <li>Mental Health</li>
                    <li>Substance Abuse</li>
                    <li>Aids, Tuberculosis and Malaria (ATM)</li>
                    <li>Maternal, Newborn and Child-Health (MNCH)</li>
                </ul>
            </section>

            <section>
                <h3>Peace & Security</h3>
                <p>Enhancing peaceful and inclusive societies and providing access to justice for all through:</p>
                <ul>
                    <li>Conflict Prevention & Transformation</li>
                    <li>Countering & Preventing Violent Extremism</li>
                </ul>
            </section>

            <section>
                <h3>Environment & Climate Change</h3>
                <p>To awaken communities to protecting nature and increase focus on bio-diversity protection and regenerative & sustainable agricultural practices through:</p>
                <ul>
                    <li>Mitigation and Adaptation</li>
                    <li>Climate Justice</li>
                    <li>Renewable Energy</li>
                    <li>Natural Resource Management</li>
                    <li>WASH</li>
                    <li>Bio-diversity Conservation</li>
                </ul>
            </section>

            <section>
                <h3>Education</h3>
                <p>Providing equal access to quality education, skills and vocational training and eliminating gender disparities through:</p>
                <ul>
                    <li>Gender Transformative Education</li>
                    <li>Safe Schools</li>
                    <li>Education-in-Emergencies</li>
                </ul>
            </section>

            <section>
                <h3>Democracy & Governance</h3>
                <p>Promoting Good Governance, Participation and Accountability and fostering Women & Youth Participation in Leadership through:</p>
                <ul>
                    <li>Policy and Legislative Advocacy/Development</li>
                    <li>Women & Youth Political Empowerment</li>
                </ul>
            </section>

            <div className="mt-6">
                <Link href="/programs" className="header-btn1">See Our Programs</Link>
            </div>
        </main>
    )
}
