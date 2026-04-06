# JermDetect 

**Real-time Observability & Automated Incident Response for Node.js**

JermDetect is a specialized observability pipeline designed to monitor application health and security anomalies. It bridges the gap between raw metrics and actionable intelligence using a modern DevOps stack.

##  Tech Stack

* **Backend:** Node.js
* **Metrics:** Prometheus
* **Visualization:** Grafana
* **Alerting:** Alertmanager & Slack API

##  Key Features

* **Real-time Metrics:** Tracking application health and performance.
* **Security Monitoring:** Custom counters for tracking login successes and failures to detect brute-force patterns.
* **Slack Integration:** Automated notifications for system health changes.
* **Infrastructure as Code:** Pre-configured `prometheus.yml` for rapid deployment.

## Prerequisites

Before running, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (LTS)
* [Prometheus](https://prometheus.io/download/) (Note: Use the Windows ARM64 version for Snapdragon X systems)
* [Grafana](https://grafana.com/grafana/download)

## 🚦 Getting Started

### 1. Start the Application (The Heart)

```bash
cd jermdetect
npm install
node app.js

```

*The server will start on `http://localhost:3000`.*

### 2. Start the Monitor (The Brain)

Navigate to your Prometheus directory and run:

```powershell
.\prometheus.exe --config.file=prometheus.yml

```

*Verify connection at `http://localhost:9090/targets`.*

## 🛣️ Roadmap

* [ ] Implement Grafana Dashboards for visual anomaly detection.
* [ ] Integrate Reactive Slack AI Agent for on-demand status checks.
* [ ] Add In-App Monitoring Co-Pilot for root-cause analysis.
