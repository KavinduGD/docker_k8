# Why k8

## minikube

## Control plane (Master node)

- **can exits one or more node for availability reasons**
- **each node can be on different vm**
- **Components**
  - Etcd
  - Scheduler
  - API server
  - Control Manager
  - Cloud Control Manager

## Worker node (data node)

- **can exits one or more node for availability reasons**
- **each node can be on different vm**
- **Components**
  - Kubelet
  - Container runtime
  - kube-proxy
  - other k8 objects

## Pods

- **each pods can have multiple containers**
- **pods running = at least one container is running**
- **containers in a pod and communicate via localhost**
