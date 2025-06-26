import { CertificatePageData } from '../types/certificate';

export const certificatePageData: CertificatePageData = {
  header: {
    title: "Certificate of Achievement",
    subtitle: "Recognizing excellence in professional development and skill mastery"
  },
  certificate: {
    id: "cert-001",
    recipient: {
      name: "Sahil Mor",
      email: "sahil.mor@example.com",
      image: "https://alansonsample.com/images/Alanson_Headshot.jpg"
    },
    course: {
      title: "Frontend Developer (React)",
      description: "This course offers a practical approach to becoming a successful Frontend Developer. Participants gain hands-on experience with tools and techniques to bridge business challenges and technical solutions effectively."
    },
    issuer: {
      name: "HackerRank",
      logo: "/hackerrank-logo.png"
    },
    dates: {
      issuedOn: "06-Dec-2024",
      expiresOn: "N/A",
      duration: "01-May-2025 to 20-May-2025"
    },
    skills: [
      { id: "html", name: "HTML" },
      { id: "css", name: "CSS" },
      { id: "js", name: "JavaScript" },
      { id: "react", name: "React" }
    ],
    verification: {
      verifier: {
        name: "Mayank Kumar",
        title: "Co-founder & MD, upGrad"
      },
      certificateId: "CRT-12345-ABCDE",
      platform: "GiveMyCertificate"
    },
    media: {
      certificateImage: "/download.png",
      shareLinks: {
        linkedIn: "#",
        direct: "#",
        download: "#"
      }
    }
  }
}; 