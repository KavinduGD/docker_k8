# Kubernetes Interview Questions

## 1. What is Kubernetes?

Kubernetes is a container orchestration platform originally developed by Google and now maintained by the Cloud Native Computing Foundation (CNCF).

It automates:
- Deployment
- Scaling
- Self-healing
- Load balancing

## 2. What problem does Kubernetes solve?

It solves:
- Managing many containers
- Scaling automatically
- Handling failures
- Zero-downtime deployments

Without orchestration, managing containers manually becomes impossible at scale.

## 3. What is a Kubernetes Cluster?

A cluster consists of:
- **Control Plane** → Manages the system
- **Worker Nodes** → Run applications (Pods)

## 4. What are the components of the Control Plane?

Main components:
- **API Server** (Entry point)
- **Scheduler**
- **Controller Manager**
- **etcd** (Cluster database)

The API Server is the entry point.

## 5. What is etcd?

etcd is a distributed key-value store that:
- Stores cluster state
- Stores configuration

> **Note:** If etcd fails, the cluster becomes unstable.

## 6. What is a Node?

A node is a machine (VM or physical) that runs your application Pods. It runs:
- **kubelet** (Node agent)
- **kube-proxy**
- **Container runtime**

## 7. What is a Pod?

A Pod is the smallest deployable unit in Kubernetes.

It:
- Contains one or more containers
- Shares network and storage

Pods are ephemeral (temporary).

## 8. Why are Pods ephemeral?

If a Pod crashes:
- Kubernetes replaces it
- It may get a new IP

Therefore, never connect directly to Pods.

## 9. What is a Deployment?

A Deployment:
- Manages **ReplicaSets**
- Ensures the desired number of Pods
- Supports rolling updates
- Allows rollbacks
- Maintains the desired state

## 10. What is a ReplicaSet?

ReplicaSet ensures a specific number of Pods are always running. Deployment automatically manages ReplicaSets.

## 11. What is a Service in Kubernetes?

A Service provides:
- Stable IP
- Stable DNS
- Load balancing

**Types:**
- ClusterIP
- NodePort
- LoadBalancer

## 12. What is ClusterIP?

- Default service type
- Accessible only inside the cluster
- Used for internal communication

## 13. What is NodePort?

- Exposes service on the node’s IP and a specific port
- Accessible externally
- Mostly used for testing

## 14. What is LoadBalancer type service?

- Creates a cloud load balancer
- Provides an external public IP
- Used in cloud environments like AWS

## 15. What is Ingress?

Ingress manages:
- HTTP routing
- Domain-based routing
- SSL termination

It requires an Ingress Controller (e.g., NGINX).

## 16. What is ConfigMap?

Stores:
- Configuration data
- Environment variables

Used for non-sensitive data.

## 17. What is Secret?

Stores:
- Passwords
- Tokens
- API keys

Data is encoded in base64.

## 18. What is Namespace?

A Namespace provides logical isolation within a cluster.

**Examples:**
- `dev`
- `staging`
- `production`

## 19. What is Horizontal Pod Autoscaler (HPA)?

HPA:
- Automatically scales Pods
- Based on CPU usage or custom metrics
- Improves performance and cost efficiency

## 20. What is Rolling Update?

A Rolling Update:
- Gradually replaces old Pods
- Ensures no downtime
- Provides a controlled rollout

## 21. What is Rollback?

If a deployment fails, you can restore a previous version using:

```bash
kubectl rollout undo deployment app
```

## 22. What is Liveness Probe?

Checks if the container is alive.
- If it fails → The container is restarted.

## 23. What is Readiness Probe?

Checks if the container is ready for traffic.
- If it fails → The container is removed from the load balancer.

## 24. What is Persistent Volume (PV)?

A PV represents storage in the cluster. It could be EBS, NFS, etc.

## 25. What is Persistent Volume Claim (PVC)?

A PVC is a request for storage by a Pod. It binds to a PV.

## 26. What is StatefulSet?

Used for stateful applications like databases.

It provides:
- Stable hostname
- Stable storage

## 27. What is DaemonSet?

Ensures one Pod runs on every node.

Used for:
- Monitoring agents
- Logging agents

## 28. What is Job?

A Job runs a one-time task or batch processing.
- Example: Data migration

## 29. What is CronJob?

A CronJob is a scheduled job that runs at a specified time.
- Example: Daily backup

## 30. Kubernetes Scenario Question

👉 **“Pod is running but service is not accessible. What do you check?”**

**Strong answer:**
- Check Pod status
- Check Service type
- Is the Target port correct?
- Are Labels matching?
- Check Network policy
- Check Ingress config
- Check Logs
