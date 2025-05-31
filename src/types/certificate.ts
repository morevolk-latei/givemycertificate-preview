export interface Skill {
  name: string;
  id: string;
}

export interface CertificateDetails {
  id: string;
  recipient: {
    name: string;
    email?: string;
  };
  course: {
    title: string;
    description: string;
  };
  issuer: {
    name: string;
    logo?: string;
  };
  dates: {
    issuedOn: string;
    expiresOn: string;
    duration: string;
  };
  skills: Skill[];
  verification: {
    verifier: {
      name: string;
      title: string;
    };
    certificateId: string;
    platform: string;
  };
  media: {
    certificateImage: string;
    shareLinks: {
      linkedIn: string;
      direct: string;
      download: string;
    };
  };
}

export interface CertificatePageData {
  header: {
    title: string;
    subtitle: string;
  };
  certificate: CertificateDetails;
} 