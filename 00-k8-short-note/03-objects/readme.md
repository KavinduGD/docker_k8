# k8 Objects

## Pods

- **each pods can have multiple containers**
- **pods running = at least one container is running**
- **containers in a pod and communicate via localhost**

## Replicasets

![Replicasets](./images/rs.png)

### Shortcomings

- **Manual Update Required**
- **Not a replacement for manual scaling**
- **Lack of Rolling Updates**

## Deployments

![Deployment](./images/deployment.png)

- **Deployment is a higher-level abstraction over ReplicaSets and builds on top of ReplicaSets.**
- **Advanced features**

  - **Rolling Updates**
  - **Rollback**
  - **Scaling**
  - **Declarative Updates**

- **In Kubernetes, Deployments detect changes to their Pod template by computing a hash. If the template changes, Kubernetes automatically triggers a rolling update, replacing the old pods with new ones. This is the change-detection mechanism.**

## Services

<image src="images/services.png" width=700 />

- **provide stable Ip or DNS to route traffic to pods**

## Services types

<image src="images/services_types.png" width=600 />

### Cluster Ip service

- **default type**
- **exposes the service on a cluster-internal IP**
- **only accessible from within the cluster**

## NodePort service

- **exposes the service on each Node’s IP**
- **a ClusterIP service is automatically created and is accessible only from within the cluster**
- **ClusterIP + NodePort**

## ExternalName

- **Maps the service to external DNS name**
- **use to redirect traffic to outside the cluster**
- **ExternalName Services rely on CNAMEs/DNS resolution**

## 🛑 How kube proxy routes requests

- **each node has one kube proxy**
- **steps**

  1. **Service is just a definition**
  2. **kube-proxy on every node watches for Services**
     - kube-proxy constantly watches the API server for:
       - Service objects
       - Endpoint objects (list of pod IPs that match the Service selector)
  3. **kube-proxy installs routing rules**
     - These rules say:
       - “If traffic comes to ClusterIP:Port → send it to one of these pod IPs”.
  4. **Pod can be anywhere**
     - If the chosen pod is on:
       - Same node → traffic stays local.
       - Different node → kube-proxy routes it through the cluster network to that node’s pod.
  5. **You never “talk to” kube-proxy directly**
     - You connect to the ClusterIP (the virtual IP assigned to the Service).
     - kube-proxy is working in the background on each node to ensure packets are forwarded to the right pod.

## 🛑 Does a Service Belong to One Node?

No — a Service in Kubernetes does not belong to any single node.

**Why?**

- A Service is a cluster-wide resource stored in the Kubernetes API server.
- not tied to any particular node.
- 🛑 All kube-proxy instances on all nodes are aware of every Service and set up the necessary routing rules.

## 🛑 Services are virtual; kube-proxy uses a routing table to forward pod requests to matching pods via the Service’s IP.
