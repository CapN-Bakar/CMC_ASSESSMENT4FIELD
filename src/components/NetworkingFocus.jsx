export default function NetworkingFocus({ percentage }) {
  let focusAreas = [];

  if (percentage <= 37.5) {
    focusAreas = [
      "Understanding basic networking concepts (IP, DNS, HTTP, HTTPS)",
      "Learning how firewalls, VPNs, and proxies work",
      "Introduction to network debugging tools like Wireshark and Ping",
      "Familiarizing with different network layers (OSI & TCP/IP model)",
    ];
  } else if (percentage <= 62.5) {
    focusAreas = [
      "Securing API communication using HTTPS and TLS/SSL",
      "Configuring and managing firewalls effectively",
      "Learning about VPNs and their role in secure communication",
      "Understanding network traffic analysis and packet filtering",
    ];
  } else if (percentage <= 87.5) {
    focusAreas = [
      "Optimizing Content Delivery Networks (CDN) for performance",
      "Implementing secure authentication mechanisms (OAuth, JWT, SSO)",
      "Advanced networking troubleshooting with command-line tools (traceroute, netstat)",
      "Understanding network security risks (DDoS, MITM attacks) and mitigation strategies",
    ];
  } else {
    focusAreas = [
      "Designing scalable and secure enterprise networks",
      "Implementing load balancing and network redundancy strategies",
      "Understanding network forensics and intrusion detection systems",
      "Optimizing cloud networking (AWS, GCP, Azure)",
    ];
  }

  return (
    <div id="networking-focus">
      <h2>🎯 Areas to Focus On</h2>
      <div className="focus-list">
        {focusAreas.map((area, index) => (
          <div key={index} className="focus-item">
            {area}
          </div>
        ))}
      </div>
    </div>
  );
}
