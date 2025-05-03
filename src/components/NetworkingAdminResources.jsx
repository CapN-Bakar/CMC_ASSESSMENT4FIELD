export default function NetworkingAdminResources({ percentage }) {
  // Existing logic to determine resources based on percentage...
  let learningMaterials = [];
  let miniProject = "";

  if (percentage <= 37.5) {
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
    learningMaterials = [
      {
        name: "NetworkChuck - Learn Networking for Beginners (YouTube)",
        url: "https://www.youtube.com/watch?v=6_eQUFZWlKE",
      }, // Kept YouTube link
      {
        name: "Coursera - Introduction to TCP/IP",
        url: "https://www.coursera.org/learn/tcpip",
      }, // Replaced Udemy TCP/IP course
      {
        name: "Wireshark University - Network Packet Analysis",
        url: "https://www.wireshark.org/docs/wsug_html_chunked/",
      },
      {
        name: "GeeksforGeeks - TCP/IP Model",
        url: "https://www.geeksforgeeks.org/tcp-ip-model/",
      }, // Added alternative resource
    ];
    miniProject =
      "💡 Use Wireshark to analyze and troubleshoot network packets.";
  } else if (percentage <= 87.5) {
    learningMaterials = [
      {
        name: "Advanced Networking - Cisco Certified Network Associate (CCNA)",
        url: "https://learningnetwork.cisco.com/s/ccna",
      },
      {
        name: "AWS Networking Essentials - Official Docs",
        url: "https://aws.amazon.com/getting-started/aws-networking-essentials/",
      }, // Replaced Udemy AWS course
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
      }, // Note: Cloud Academy is subscription-based, consider AWS/Azure/GCP specific docs if needed
      {
        name: "Advanced Network Penetration Testing",
        url: "https://www.offensive-security.com/metasploit-unleashed/",
      },
    ];
    miniProject =
      "💡 Configure a cloud-based enterprise network using AWS Virtual Private Cloud (VPC).";
  }

  // Log received data (optional, kept from original)
  console.log("📌 NetworkingAdminResources Received Data:", { percentage });

  return (
    <div id="networking-admin-resources">
      {" "}
      {/* Keep unique ID */}
      <h3>📚 Recommended Learning Materials</h3>
      {learningMaterials.length > 0 ? (
        <div className="resource-list">
          {" "}
          {/* Use class from WebDevResources */}
          {learningMaterials.map((material, index) => (
            <div key={index} className="resource-item">
              {" "}
              {/* Use class from WebDevResources */}
              {/* Keys 'name' and 'url' are already used */}
              <a href={material.url} target="_blank" rel="noopener noreferrer">
                {material.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>✅ No specific materials recommended based on this score.</p> // Added a fallback message
      )}
      <h3>💡 Mini-Project</h3>
      <p>{miniProject}</p>
    </div>
  );
}
