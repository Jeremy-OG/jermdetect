# JermDetect
**Real-time Observability & Automated Incident Response for Node.js**
 
JermDetect is a production-style observability pipeline that monitors application health and detects security anomalies in real time. It bridges the gap between raw metrics and actionable intelligence using a containerized DevOps stack.
 
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Backend | Node.js + Express |
| Metrics | Prometheus (custom counters + histograms) |
| Visualization | Grafana + PromQL |
| Alerting | Alertmanager + Slack Webhooks |
| Infrastructure | Docker + Docker Compose |
 
---
 
## Key Features
 
- **Real-time Metrics** — Tracks HTTP request duration across all routes using Prometheus histogram exporters with configurable latency buckets
- **Security Monitoring** — Custom counters detect login success/failure patterns; alert rules fire on brute-force spikes (10+ failures/min)
- **Automated Alerting** — Alertmanager routes critical and warning severity alerts to Slack in real time via webhook integration
- **p95 Latency Tracking** — PromQL queries surface the 95th percentile response time, triggering alerts when thresholds exceed 1 second
- **Fully Containerized** — Entire stack (app, Prometheus, Grafana, Alertmanager) spun up with a single Docker Compose command
---
 
## Getting Started
 
### Prerequisites
 
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- A Slack Incoming Webhook URL (for alert routing)
### Run the Stack
 
1. Clone the repo and navigate to the project directory
```bash
git clone https://github.com/YOUR_USERNAME/jermdetect.git
cd jermdetect
```
 
2. Create a `.env` file in the root with your Slack webhook:
```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```
 
3. Spin up the full stack:
```bash
docker compose up --build
```
 
### Service URLs
 
| Service | URL |
|---|---|
| JermDetect App | http://localhost:4000 |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3000 |
| Alertmanager | http://localhost:9093 |
 
### Simulate Traffic
 
Hit the login endpoint to generate metrics:
 
```bash
# Simulate login attempts (randomized success/failure)
curl http://localhost:4000/login
 
# View raw Prometheus metrics
curl http://localhost:4000/metrics
```
 
---
 
## Alert Rules
 
| Alert | Condition | Severity |
|---|---|---|
| HighResponseTime | p95 latency > 1s for 1 min | Critical |
| LoginFailureSpike | >10 failures/min for 10s | Warning |
 
