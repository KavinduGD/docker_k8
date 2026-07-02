# Ingress

## SSL certificate with ingress

### 1. AWS Load Balancer terminates HTTPS (EKS + AWS Load Balancer Controller)

```
                HTTPS
User
  │
  ▼
AWS Application Load Balancer (ALB)
(SSL certificate from ACM)
  │
  │ HTTP (or HTTPS)
  ▼
Ingress Controller / Kubernetes
  │
  ▼
Service
  │
  ▼
Pod
```

- The SSL certificate is attached to the AWS ALB.
- The ALB performs the TLS handshake.
- Kubernetes never uses the certificate.

### 2. Ingress Controller terminates HTTPS (NGINX/Traefik)

This is common on:

- MicroK8s
- Minikube
- Bare-metal Kubernetes
- On-premises clusters

```
              HTTPS
User
  │
  ▼
NGINX / Traefik Ingress Controller
(cert-manager + Let's Encrypt)
  │
  ▼
Service
  │
  ▼
Pod
```

- cert-manager requests a certificate from Let's Encrypt.
- The certificate is stored as a Kubernetes Secret.
- NGINX or Traefik reads the Secret and performs TLS termination.

<img src="images/ssl-termination-in-ingress.png" width="600px">