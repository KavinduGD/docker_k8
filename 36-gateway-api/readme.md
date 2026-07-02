# Gateway api

- The Kubernetes Gateway API is the next-generation successor to the original Ingress.
- Gateway api solves the same problems as Ingress, but with a addressing the drawbacks of Ingress.

## Ingress controller limitations

<image src="./images/ingress-limitations.png" width="600px" />

- Multi-tenancy – Kubernetes wasn't really designed for multiple independent teams to safely share one Ingress object. It's more of an "everyone dumps their rules in one place" model.
- Namespace Isolation – Even if Team A and Team B's services live in separate namespaces, this single Ingress resource crosses that boundary and mixes both teams' host rules together.
- No RBAC for Features – There's no fine-grained way to say "Team A can only edit the wear.my-online-store.com block" and "Team B can only edit the watch.my-online-store.com block." Anyone with edit access to this Ingress can edit all the rules — including the other team's.
- No Resource Isolation – One team's mistake (bad config, huge rule set, etc.) can affect the entire Ingress object, which affects the other team's routes too, since they're bundled together.
- A single "one-size-fits-all" file. For advanced features, you must use annotations (e.g., nginx.ingress.kubernetes.io/rewrite-target). These do not work across different tools, creating vendor lock-in.
- Only handles HTTP and HTTPS traffic well. It requires "hacks" or custom code to route TCP or UDP traffic.
- A manifest written for one controller (like NGINX, AWS Load Balancer) might break on another.

---

## Components of Gateway API

## 1. GatewayClass

**GatewayClass = Blueprint**

It tells Kubernetes **which controller** will manage Gateways.

Example:

```yaml
kind: GatewayClass
metadata:
  name: traefik
spec:
  controllerName: traefik.io/gateway-controller
```

Think of it like:

```
GatewayClass
    │
    └── "Use the Traefik Gateway Controller"
```

Just like `IngressClass` tells Kubernetes which Ingress controller to use.

---

## 2. Gateway

**Gateway = The actual entry point into your cluster**

- The Gateway itself was created using a **GatewayClass**.

It listens for incoming traffic.

Example:

```yaml
kind: Gateway
metadata:
  name: web-gateway
spec:
  gatewayClassName: traefik
  listeners:
    - port: 80
      protocol: HTTP
```

This creates something like:

```
Internet
     │
     ▼
 Gateway
(Listening on Port 80)
```

The Gateway **doesn't know which app to send traffic to yet.**

---

## 3. HTTPRoute

**HTTPRoute = Routing rules**

It tells the Gateway where requests should go.

Example:

```yaml
kind: HTTPRoute
metadata:
  name: frontend-route
spec:
  parentRefs:
    - name: web-gateway
  rules:
    - backendRefs:
        - name: frontend-service
          port: 80
```

This says:

```
If traffic comes to web-gateway
        │
        ▼
Send it to frontend-service
```

---

## Putting everything together

```
                Internet
                    │
                    ▼
              +-----------+
              | Gateway   |
              +-----------+
                    │
             Uses HTTPRoute
                    │
          +---------+---------+
          ▼                   ▼
Frontend Service      Backend Service
```

## Easy way to remember

- **Gateway API** → The whole networking system.
- **GatewayClass** → _What kind of gateway should be created?_ (Blueprint)
- **Gateway** → _The actual network entry point_ (Door)
- **HTTPRoute** → _How requests are routed_ (Directions inside the building)
