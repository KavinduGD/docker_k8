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

## How minikube works

- **has many drivers**

  - **docker**
    - **create a docker container that has k8 cluster (control plan and worker node are inside of that container)**
    - **so this creates a container a named minikube that is a docker container which also have docker inside of it**
  - virtual box
    - create vm that has k8
  - none driver
    - k8 directly install on top of linux
    - services like etcd, scheduler runs as system software

- **In the cloud (like EKS, AKS, GKE), Kubernetes runs on real virtual machines, not simulated by Minikube drivers like Docker or VirtualBox.**

  - Instead, they run Kubernetes natively on real VMs, without using Minikube or any of its drivers.
  - Control plane and worker nodes are managed and run on real infrastructure provided by the cloudControl plane and worker nodes are managed and run on real infrastructure provided by the cloud

- **Minikube drivers are only for local development, to simulate a Kubernetes cluster on your personal machine.**

## Pods

- **each pods can have multiple containers**
- **pods running = at least one container is running**
- **containers in a pod and communicate via localhost**
