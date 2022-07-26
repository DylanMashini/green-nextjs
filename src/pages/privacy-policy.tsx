import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function TOS() {
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const isProd = process.env.NODE_ENV === "production";
	const getMobile = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		if (window.innerWidth < 1079) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	if (!isProd) {
		useEffect(() => {
			getMobile();
			window.addEventListener("resize", getMobile);
		});
	} else {
		useEffect(() => {
			getMobile();
		});
	}
	return (
		<Layout mobile={mobile}>
			<div
				style={{
					width: "80vw",
					marginTop: "9vh",
					marginLeft: "2vw",
				}}
			>
				<h2>PRIVACY POLICY</h2>
				<p>
					My Green Earth values its users' privacy. This Privacy
					Policy ("Policy") will help you understand how we collect
					and use personal information from those who visit our
					website or make use of our online facilities and services,
					and what we will and will not do with the information we
					collect. Our Policy has been designed to ensure those
					affiliated with My Green Earth are aware of our commitment
					and realization of our obligation not only to meet, but to
					exceed, most existing privacy standards. We reserve the
					right to make changes to this Policy at any given time. If
					you want to make sure that you are up to date with the
					latest changes, we advise you to frequently visit this page.
					If at any point in time My Green Earth decides to make use
					of any personally identifiable information on file, in a
					manner vastly different from that which was stated when this
					information was initially collected, the user or users shall
					be promptly notified by email. Users at that time shall have
					the option as to whether to permit the use of their
					information in this separate manner. This Policy applies to
					My Green Earth, and it governs any and all data collection
					and usage by us. Through the use of MyGreenEarth.org, you
					are therefore consenting to the data collection procedures
					expressed in this Policy. Please note that this Policy does
					not govern the collection and use of information by
					companies that My Green Earth does not control, nor by
					individuals not employed or managed by us. If you visit a
					website that we mention or link to, be sure to review its
					privacy policy before providing the site with information.
					It is highly recommended and suggested that you review the
					privacy policies and statements of any website you choose to
					use or frequent to better understand the way in which
					websites garner, make use of and share the information
					collected.
				</p>
				<p>
					Specifically, this Policy will inform you of the following:
				</p>
				<ol>
					<li>
						What personally identifiable information is collected
						from you through our website;
					</li>
					<li>
						Why we collect personally identifiable information and
						the legal basis for such collection;
					</li>
					<li>
						How we use the collected information and with whom it
						may be shared;
					</li>
					<li>
						What choices are available to you regarding the use of
						your data; and
					</li>
					<li>
						The security procedures in place to protect the misuse
						of your information.
					</li>
				</ol>
				<h3>Information We Collect</h3>
				<p>
					It is always up to you whether to disclose personally
					identifiable information to us, although if you elect not to
					do so, we reserve the right not to register you as a user or
					provide you with any products or services. This website
					collects various types of information, such as: Voluntarily
					provided information which may include your name, address,
					email address, billing and/or credit card information etc.
					which may be used when you make donations, purchase products
					and/or services and to deliver the services you have
					requested. In addition, My Green Earth may have the occasion
					to collect non-personal anonymous demographic information,
					such as age, gender, household income, political
					affiliation, race and religion, as well as the type of
					browser you are using, IP address, or type of operating
					system, which will assist us in providing and maintaining
					superior quality service. Please rest assured that this site
					will only collect personal information that you knowingly
					and willingly provide to us by way of surveys, completed
					membership forms, and emails. It is the intent of this site
					to use personal information only for the purpose for which
					it was requested, and any additional uses specifically
					provided for on this Policy.
				</p>
				<h3>Why We Collect Information and For How Long</h3>
				<p>We are collecting your data for several reasons:</p>
				<ul>
					<li>
						To better understand your needs and provide you with the
						services you have requested;
					</li>
					<li>
						To fulfill our legitimate interest in improving our
						services and products;
					</li>
					<li>
						To send you promotional emails containing information we
						think you may like when we have your consent to do so;
					</li>
					<li>
						To contact you to fill out surveys or participate in
						other types of market research, when we have your
						consent to do so;
					</li>
					<li>
						To customize our website according to your online
						behavior and personal preferences.
					</li>
				</ul>
				<p>
					The data we collect from you will be stored for no longer
					than necessary. The length of time we retain said
					information will be determined based upon the following
					criteria: the length of time your personal information
					remains relevant; the length of time it is reasonable to
					keep records to demonstrate that we have fulfilled our
					duties and obligations; any limitation periods within which
					claims might be made; any retention periods prescribed by
					law or recommended by regulators, professional bodies or
					associations; the type of contract we have with you, the
					existence of your consent, and our legitimate interest in
					keeping such information as stated in this Policy.
				</p>
				<h3>Use of Information Collected</h3>
				<p>
					My Green Earth does not now, nor will it in the future,
					sell, rent or lease any of its customer lists and/or names
					to any third parties.
				</p>
				<p>
					My Green Earth may collect and may make use of personal
					information to assist in the operation of our website and to
					ensure delivery of the services you need and request. At
					times, we may find it necessary to use personally
					identifiable information as a means to keep you informed of
					other possible products and/or services that may be
					available to you from mygreenearth.org
				</p>
				<p>
					My Green Earth may also be in contact with you with regards
					to completing surveys and/or research questionnaires related
					to your opinion of current or potential future services that
					may be offered.
				</p>
				<p>
					My Green Earth may feel it necessary, from time to time, to
					contact you on behalf of our other external business
					partners with regards to a potential new offer which may be
					of interest to you. If you consent or show interest in
					presented offers, then, at that time, specific identifiable
					information, such as name, email address and/or telephone
					number, may be shared with the third party.
				</p>
				<p>
					My Green Earth may find it necessary to our customers,
					volunteers, and donors to share specific data with our
					trusted partners in an effort to conduct statistical
					analysis, provide you with email and/or postal mail, deliver
					support and/or arrange for deliveries to be made. Those
					third parties shall be strictly prohibited from making use
					of your personal information, other than to deliver those
					services which you requested, and as such they are required,
					in accordance with this agreement, to maintain the strictest
					of confidentiality with regards to all your information.
				</p>
				<p>
					My Green Earth uses various third-party social media
					features including but not limited to Instagram, Facebook,
					LinkedIn, Youtube, Google, Twitter, and other interactive
					programs. These may collect your IP address and require
					cookies to work properly. These services are governed by the
					privacy policies of the providers and are not within My
					Green Earth's control.
				</p>
				<h3>Disclosure of Information</h3>
				<p>
					My Green Earth may not use or disclose the information
					provided by you except under the following circumstances:
				</p>
				<ul>
					<li>
						As necessary to provide services or products you have
						requested;
					</li>
					<li>
						In other ways described in this Policy or to which you
						have otherwise consented;
					</li>
					<li>
						In the aggregate with other information in such a way so
						that your identity cannot reasonably be determined;
					</li>
					<li>
						As required by law, or in response to a subpoena or
						search warrant;
					</li>
					<li>
						To outside auditors who have agreed to keep the
						information confidential;
					</li>
					<li>As necessary to enforce the Terms of Service;</li>
					<li>
						As necessary to maintain, safeguard and preserve all the
						rights and property of My Green Earth.
					</li>
				</ul>
				<h3>Non-Marketing Purposes</h3>
				<p>
					My Green Earth greatly respects your privacy. We do maintain
					and reserve the right to contact you if needed for
					non-marketing purposes (such as bug alerts, security
					breaches, account issues, and/or changes in My Green Earth
					products and services). In certain circumstances, we may use
					our website, newspapers, or other public means to post a
					notice.
				</p>
				<h3>Children under the age of 13</h3>
				<p>
					My Green Earth's website is not directed to, and does not
					knowingly collect personal identifiable information from,
					children under the age of thirteen (13). If it is determined
					that such information has been inadvertently collected on
					anyone under the age of thirteen (13), we shall immediately
					take the necessary steps to ensure that such information is
					deleted from our system's database, or in the alternative,
					that verifiable parental consent is obtained for the use and
					storage of such information. Anyone under the age of
					thirteen (13) must seek and obtain parent or guardian
					permission to use this website.
				</p>
				<h3>Unsubscribe or Opt-Out</h3>
				<p>
					All users and visitors to our website have the option to
					discontinue receiving communications from us by way of email
					or newsletters. To discontinue or unsubscribe from our
					website please send an email that you wish to unsubscribe to
					info@mygreenearth.org. If you wish to unsubscribe or opt-out
					from any third-party websites, you must go to that specific
					website to unsubscribe or opt-out. My Green Earth will
					continue to adhere to this Policy with respect to any
					personal information previously collected.
				</p>
				<h3>Links to Other Websites</h3>
				<p>
					Our website does contain links to affiliate and other
					websites. My Green Earth does not claim nor accept
					responsibility for any privacy policies, practices and/or
					procedures of other such websites. Therefore, we encourage
					all users and visitors to be aware when they leave our
					website and to read the privacy statements of every website
					that collects personally identifiable information. This
					Privacy Policy Agreement applies only and solely to the
					information collected by our website.
				</p>
				<h3>Notice to European Union Users</h3>
				<p>
					My Green Earth's operations are located primarily in the
					United States. If you provide information to us, the
					information will be transferred out of the European Union
					(EU) and sent to the United States. (The adequacy decision
					on the EU-US Privacy became operational on August 1, 2016.
					This framework protects the fundamental rights of anyone in
					the EU whose personal data is transferred to the United
					States for commercial purposes. It allows the free transfer
					of data to companies that are certified in the US under the
					Privacy Shield.) By providing personal information to us,
					you are consenting to its storage and use as described in
					this Policy.
				</p>
				<h3>Security</h3>
				<p>
					My Green Earth takes precautions to protect your
					information. When you submit sensitive information via the
					website, your information is protected both online and
					offline. Wherever we collect sensitive information (e.g.
					credit card information), that information is encrypted and
					transmitted to us in a secure way. You can verify this by
					looking for a lock icon in the address bar and looking for
					"https" at the beginning of the address of the webpage.
				</p>
				<p>
					While we use encryption to protect sensitive information
					transmitted online, we also protect your information
					offline. Only employees who need the information to perform
					a specific job (for example, billing or customer service)
					are granted access to personally identifiable information.
					The computers and servers in which we store personally
					identifiable information are kept in a secure environment.
					This is all done to prevent any loss, misuse, unauthorized
					access, disclosure or modification of the user's personal
					information under our control.
				</p>
				<p>
					The company also uses Secure Socket Layer (SSL) for
					authentication and private communications to build users'
					trust and confidence in the internet and website use by
					providing simple and secure access and communication of
					credit card and personal information.
				</p>
				<h3>Acceptance of Terms</h3>
				<p>
					By using this website, you are hereby accepting the terms
					and conditions stipulated within the Privacy Policy
					Agreement. If you are not in agreement with our terms and
					conditions, then you should refrain from further use of our
					sites. In addition, your continued use of our website
					following the posting of any updates or changes to our terms
					and conditions shall mean that you agree and acceptance of
					such changes.
				</p>
				<h3>How to Contact Us</h3>
				<p>
					If you have any questions or concerns regarding the Privacy
					Policy Agreement related to our website, please feel free to
					contact us at the following email, telephone number or
					mailing address.
				</p>
				<p>Email: info@mygreenearth.org</p>
				<p>Mailing Address:</p>
				<p>My Green Earth, Inc.</p>
				<p>531 Roselane Street NW</p>
				<p>Suite 400</p>
				<p>Marietta, GA 30060</p>
			</div>
		</Layout>
	);
}
