export default function NetworkingAdminResources({ percentage }) {
  let learningMaterials = [];
  let miniProject = "";

  if (percentage <= 37.5) {
    // Beginner Level (0-3 correct)
    learningMaterials = [
      {
        name: "W3Schools - Networking Basics",
        url: "https://www.w3schools.com/networking/",
      },
      {
        name: "Cisco Networking Academy - Introduction to Networking",
        url: "https://www.netacad.com/courses/intro-networking",
      },
      {
        name: "FreeCodeCamp - Networking Basics",
        url: "https://www.freecodecamp.org/news/networking-basics/",
      },
      {
        name: "MDN Docs - HTTP & Web Protocols",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
      },
    ];
    miniProject =
      "💡 Set up a local network and test connectivity using ping & traceroute.";
  } else if (percentage <= 62.5) {
    // Intermediate Level (4-5 correct)
    learningMaterials = [
      {
        name: "NetworkChuck - Learn Networking for Beginners (YouTube)",
        url: "https://www.youtube.com/watch?v=qiQR5rTSshw",
      },
      {
        name: "Udemy - TCP/IP Networking Course",
        url: "https://www.udemy.com/course/tcp-ip/",
      },
      {
        name: "Wireshark University - Network Packet Analysis",
        url: "https://www.wireshark.org/docs/wsug_html_chunked/",
      },
      {
        name: "Coursera - Computer Networking Fundamentals",
        url: "https://www.coursera.org/learn/computer-networking",
      },
    ];
    miniProject =
      "💡 Use Wireshark to analyze and troubleshoot network packets.";
  } else if (percentage <= 87.5) {
    // Advanced Intermediate (6-7 correct)
    learningMaterials = [
      {
        name: "Advanced Networking - Cisco Certified Network Associate (CCNA)",
        url: "https://learningnetwork.cisco.com/s/ccna",
      },
      {
        name: "AWS Networking Specialization - Cloud Networking",
        url: "https://www.udemy.com/course/aws-advanced-networking-specialty-exam-prep/",
      },
      {
        name: "Cybersecurity & Networking - Penetration Testing Guide",
        url: "https://www.offensive-security.com/metasploit-unleashed/",
      },
      {
        name: "Load Balancing and CDN Optimization - Akamai University",
        url: "https://learn.akamai.com/",
      },
    ];
    miniProject =
      "💡 Build a secure API gateway using Nginx as a reverse proxy.";
  } else {
    // Expert Level (8 correct)
    learningMaterials = [
      {
        name: "CCNP Advanced Networking",
        url: "https://learningnetwork.cisco.com/s/ccnp",
      },
      {
        name: "Network Security & Ethical Hacking (Cybersecurity Guide)",
        url: "https://www.cybrary.it/course/ethical-hacking/",
      },
      {
        name: "Implementing Scalable Network Architecture (AWS, Azure, GCP)",
        url: "https://cloudacademy.com/",
      },
      {
        name: "Advanced Network Penetration Testing",
        url: "https://www.offensive-security.com/metasploit-unleashed/",
      },
    ];
    miniProject =
      "💡 Configure a cloud-based enterprise network using AWS Virtual Private Cloud (VPC).";
  }

  return (
    <div id="networking-admin-resources">
      <h3>📚 Recommended Learning Materials</h3>
      <ul>
        {learningMaterials.map((material, index) => (
          <li key={index}>
            <a href={material.url} target="_blank" rel="noopener noreferrer">
              {material.name}
            </a>
          </li>
        ))}
      </ul>

      <h3>💡 Mini-Project</h3>
      <p>{miniProject}</p>
    </div>
  );
}
