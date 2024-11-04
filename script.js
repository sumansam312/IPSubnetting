document.getElementById("ipForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const ip = document.getElementById("ip").value;
  const subnet = document.getElementById("subnet").value;
  const ipCount = parseInt(document.getElementById("ipCount").value, 10);

  const ipParts = ip.split(".").map(Number);

  // Validate the IP address
  if (ipParts.length !== 4 || ipParts.some((part) => part < 0 || part > 255)) {
    alert("Please enter a valid IP address.");
    return;
  }

  // Validate subnet mask
  const cidr = parseInt(subnet.replace("/", ""));
  if (isNaN(cidr) || cidr < 0 || cidr > 32) {
    alert("Please enter a valid subnet mask in CIDR notation (e.g., /24).");
    return;
  }

  const [networkId, broadcastAddress, totalIPs] = calculateNetworkDetails(
    ipParts,
    cidr
  );
  const usableIPsStart = calculateUsableStart(networkId, cidr);
  const usableIPsEnd = calculateUsableEnd(broadcastAddress);
  const allIPs = generateAllIPs(networkId, totalIPs, ipCount);

  const ipClass = getIPClass(ipParts[0]);
  const numberOfNetworks = calculateNumberOfNetworks(cidr, ipClass);

  displayResults(
    networkId,
    broadcastAddress,
    usableIPsStart,
    usableIPsEnd,
    totalIPs,
    ipClass,
    allIPs,
    numberOfNetworks
  );
});

function calculateNetworkDetails(ipParts, cidr) {
  const totalIPs = Math.pow(2, 32 - cidr);
  const networkId = [...ipParts];
  const mask = 32 - cidr;

  // Set the network ID based on the CIDR
  for (let i = 0; i < mask; i++) {
    networkId[3 - Math.floor(i / 8)] &= 255 - (1 << i % 8);
  }

  const broadcastAddress = [...networkId];
  for (let i = 0; i < mask; i++) {
    broadcastAddress[3 - Math.floor(i / 8)] |= 1 << i % 8;
  }

  return [networkId.join("."), broadcastAddress.join("."), totalIPs];
}

function calculateUsableStart(networkId, cidr) {
  const parts = networkId.split(".").map(Number);
  if (cidr === 32) return "No usable IPs"; // No usable IPs for /32
  parts[3] += 1; // Start from the next IP
  return parts.join(".");
}

function calculateUsableEnd(broadcastAddress) {
  const parts = broadcastAddress.split(".").map(Number);
  parts[3] -= 1; // Last usable IP
  return parts.join(".");
}

function generateAllIPs(networkId, totalIPs, ipCount) {
  const baseParts = networkId.split(".").map(Number);
  const actualIPsToShow = Math.min(totalIPs, ipCount);

  return Array.from({ length: actualIPsToShow }, (_, i) => {
    const newParts = [...baseParts];
    newParts[3] += i; // Increment last octet
    return newParts.join(".");
  });
}

function getIPClass(firstOctet) {
  if (firstOctet >= 1 && firstOctet <= 126) return "Class A";
  if (firstOctet >= 128 && firstOctet <= 191) return "Class B";
  if (firstOctet >= 192 && firstOctet <= 223) return "Class C";
  return "Invalid Class";
}

function calculateNumberOfNetworks(cidr, ipClass) {
  let originalCIDR;

  switch (ipClass) {
    case "Class A":
      originalCIDR = 8; // Default for Class A
      break;
    case "Class B":
      originalCIDR = 16; // Default for Class B
      break;
    case "Class C":
      originalCIDR = 24; // Default for Class C
      break;
    default:
      return 0; // If class is invalid
  }

  // Calculate the number of networks
  return Math.pow(2, cidr - originalCIDR);
}

function displayResults(
  networkId,
  broadcastAddress,
  usableIPsStart,
  usableIPsEnd,
  totalIPs,
  ipClass,
  allIPs,
  numberOfNetworks
) {
  const resultsBody = document.getElementById("resultsBody");
  resultsBody.innerHTML = `
      <tr>
          <td>${networkId}</td>
          <td>${broadcastAddress}</td>
          <td>${usableIPsStart} - ${usableIPsEnd}</td>
          <td>${totalIPs}</td>
          <td>${ipClass}</td>
          <td>${numberOfNetworks}</td>
      </tr>
  `;

  const allIPsContainer = document.getElementById("allIPsContainer");
  allIPsContainer.innerHTML = `<h3>IP Addresses in the Subnet:</h3><pre>${allIPs.join(
    "\n"
  )}</pre>`;
}
