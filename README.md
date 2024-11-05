# Subnetting Calculator

A simple and effective web-based Subnetting Calculator to assist network engineers, IT professionals, and students with IP subnetting. This tool helps calculate various subnet information, including network and broadcast addresses, first and last usable IPs, and more.

### Features:
- **IP Address Input**: Easily input any IP address and subnet mask to compute subnet information.
- **Detailed Output**: View results such as Network Address, Broadcast Address, Subnet Mask, First Usable IP, Last Usable IP, and more.
- **User-Friendly**: Simple, clean interface designed for both desktop and mobile devices.

---

## Screenshots:
![image](https://github.com/user-attachments/assets/0adbc116-4a2a-4e1c-ab0e-d8d44d95d6a2)


---

## Table of Contents
1. [Project Overview](#project-overview)
2. [What is IP Subnetting?](#what-is-ip-subnetting)
3. [Importance of IP Subnetting](#importance-of-ip-subnetting)
4. [How Subnetting Calculator Works](#how-subnetting-calculator-works)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Technologies Used](#technologies-used)
8. [License](#license)

---

## Project Overview

This Subnetting Calculator is a tool built with HTML, CSS, and JavaScript that allows users to input an IP address and subnet mask to quickly calculate subnet details. These calculations are important for network setup, troubleshooting, and understanding the structure of IP addresses in a given network.

The calculator provides essential subnetting information:
- **Network Address**: Identifies the network portion of the IP address.
- **Broadcast Address**: Used to send messages to all devices on the network.
- **First and Last Usable IP Addresses**: These are the first and last IPs in the subnet that can be assigned to hosts.
- **Number of Hosts**: The number of devices that can be accommodated within a subnet.
- **CIDR Notation**: The subnet mask in Classless Inter-Domain Routing (CIDR) format.

---

## What is IP Subnetting?

IP subnetting is the process of dividing a larger network into smaller, more manageable sub-networks (subnets). This is important because it allows for more efficient use of IP addresses, improves network performance, and enhances security.

### IPv4 Addressing:
IPv4 addresses are 32-bit numerical values, typically written as four decimal octets separated by periods (e.g., `192.168.1.0`).

An IP address is divided into two parts:
- **Network Portion**: Identifies the network.
- **Host Portion**: Identifies the specific device (host) within the network.

Subnetting allows you to:
- **Segment a large network** into smaller subnets, helping reduce broadcast traffic.
- **Use IP addresses efficiently**, allocating only as many IP addresses as needed for each subnet.
- **Enhance security** by isolating different parts of a network (e.g., isolating a department's network from the main office network).

### Subnet Mask:
A subnet mask is a 32-bit number that separates the network and host portions of an IP address. It works by setting the network portion to `1` and the host portion to `0`. A subnet mask like `255.255.255.0` means the first 24 bits are used for the network address and the remaining 8 bits are used for host addresses within that network.

---

## Importance of IP Subnetting

1. **Efficient IP Address Utilization**:
   - Subnetting allows you to break down large networks into smaller, more manageable segments. This prevents waste of IP addresses and makes more efficient use of the available address space.

2. **Improved Network Performance**:
   - By creating smaller subnets, broadcast traffic is contained within a specific subnet, which reduces the amount of unnecessary network traffic and improves performance.

3. **Better Security**:
   - Subnetting enables isolation of network segments. For example, sensitive devices (like servers) can be placed in a separate subnet from general user devices, reducing the potential attack surface.

4. **Scalability**:
   - As networks grow, subnetting allows for easy expansion without wasting a significant number of IP addresses. New subnets can be created as needed, without disrupting the existing network.

5. **Better Control**:
   - Subnetting provides control over routing and network management. It allows network administrators to define smaller routing tables and optimize traffic flow.

---

## How Subnetting Calculator Works

This Subnetting Calculator takes an IP Address and Subnet Mask as input, then performs the following operations:

1. **Calculates the Network Address**:
   - This is the base address of the subnet, which represents all devices in the same network.

2. **Calculates the Broadcast Address**:
   - This is the address used to send data to all devices in the subnet.

3. **First and Last Usable IP**:
   - The first usable IP is the IP address immediately following the network address.
   - The last usable IP is the address just before the broadcast address. These are the IPs that can be assigned to devices within the network.

4. **Subnet Mask in CIDR Notation**:
   - CIDR notation simplifies the subnet mask representation. Instead of writing out `255.255.255.0`, it can be represented as `/24`, indicating that the first 24 bits are used for the network portion.

5. **Number of Usable Hosts**:
   - The number of available IP addresses for devices (hosts) in the subnet is determined by the number of bits available for the host portion. The formula used is `2^(number of host bits) - 2`, subtracting 2 for the network and broadcast addresses.

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/subnetting-calculator.git
```

## Navigate to the project directory:
```bash
cd subnetting-calculator
```
Open the index.html file in your browser:
Simply open the index.html file in your browser to start using the Subnetting Calculator.

## Usage
1. Open the `index.html` file in your web browser.
2. Enter the IP Address (e.g., `192.168.1.1`) and Subnet Mask (e.g., `255.255.255.0`).
3. Click on the Calculate button to generate the subnet information.
4. The results will display the following:
* Network Address
* Broadcast Address
* First Usable IP
* Last Usable IP
* Number of Hosts
* CIDR Notation

---

## Technologies Used

* **HTML**: Provides the structure and layout of the web page.
* **CSS**: Styles the page and ensures it is responsive for mobile and desktop views.
* **JavaScript**: Performs the subnetting calculations and handles user input/output.
* **SVG**: Graphics used for visual elements (e.g., logo and icons).

---
## License

  * This project is licensed under the MIT License.

* See the LICENSE file for more information.
