import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: [
        "We respect your privacy and are committed to safeguarding your personal information. Any data collected through our website is protected using industry-standard security measures, and we do not share information with third parties without explicit consent.",
        "Thank you for visiting the Nandivardhan Group website. By accessing this site, you agree to the terms and conditions outlined in this Disclaimer Policy. The content provided on this website is for informational purposes only and should not be considered legal, financial, or real estate advice.",
      ],
    },
    {
      title: "Accuracy of Information",
      content: [
        "While we strive to ensure that all information presented on our website is accurate and up-to-date, Nandivardhan Group makes no representations or warranties, expressed or implied, about the completeness, accuracy, or reliability of the information. Project details, floor plans, amenities, and other features are subject to change without prior notice, as per the guidelines of the Real Estate (Regulation and Development) Act, 2016 (RERA).",
      ],
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may include links to third-party websites. Nandivardhan Group is not responsible for the content or privacy practices of these external sites. Accessing these links is at your own risk, and we encourage you to review the privacy policies of any linked websites.",
      ],
    },
    {
      title: "No Offer or Contract",
      content: [
        "The information on this site does not constitute an offer, invitation, or contract to sell any property, nor does it bind Nandivardhan Group in any legal obligation. All sales are subject to the terms and conditions of the agreement entered into between the buyer and Nandivardhan Group.",
      ],
    },
    {
      title: "Use of Data",
      content: [
        "Any personal data collected through our website forms is used strictly for communication purposes and is protected as per our Privacy Policy. We do not share your data with third parties unless required by law.",
      ],
    },
    {
      title: "Changes to the Policy",
      content: [
        "Nandivardhan Group reserves the right to modify this Disclaimer Privacy Policy at any time. We recommend reviewing this page periodically to stay informed about any updates.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="bg-primary text-primary-foreground p-4">
                <CardTitle className="text-xl font-semibold">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-700 mb-4 last:mb-0 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
