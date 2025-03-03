export default function NetworkingFocus({ percentage }) {
  let focusAreas = [];

  if (percentage <= 37.5) {
    // Beginner Level (0-3 correct)
    focusAreas = [
      "Understanding basic networking concepts (IP, DNS, HTTP, HTTPS)",
      "Learning how firewalls, VPNs, and proxies work",
      "Introduction to network debugging tools like Wireshark and Ping",
      "Familiarizing with different network layers (OSI & TCP/IP model)",
    ];
  } else if (percentage <= 62.5) {
    // Intermediate Level (4-5 correct)
    focusAreas = [
      "Securing API communication using HTTPS and TLS/SSL",
      "Configuring and managing firewalls effectively",
      "Learning about VPNs and their role in secure communication",
      "Understanding network traffic analysis and packet filtering",
    ];
  } else if (percentage <= 87.5) {
    // Advanced Intermediate (6-7 correct)
    focusAreas = [
      "Optimizing Content Delivery Networks (CDN) for performance",
      "Implementing secure authentication mechanisms (OAuth, JWT, SSO)",
      "Advanced networking troubleshooting with command-line tools (traceroute, netstat)",
      "Understanding network security risks (DDoS, MITM attacks) and mitigation strategies",
    ];
  } else {
    // Expert Level (8 correct)
    focusAreas = [
      "Designing scalable and secure enterprise networks",
      "Implementing load balancing and network redundancy strategies",
      "Understanding network forensics and intrusion detection systems",
      "Optimizing cloud networking (AWS, GCP, Azure)",
    ];
  }

  return (
    <div id="networking-focus">
      <h3>🎯 Areas to Focus On</h3>
      <ul>
        {focusAreas.map((area, index) => (
          <li key={index}>{area}</li>
        ))}
      </ul>
    </div>
  );
}
