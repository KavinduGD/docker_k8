## Name spaces

<img src="./images/name_spaces.drawio.png" width=1000>

- **1. All resources that belongs to dev and prod environment are in the one cluster**
  - There are not isolation without name spaces
- **2. One part of the system try to use more resources and others are left with less or no resources**
- **3. Some part of the system get crashed due to resource contention**

### 😀 Name spaces provide a way to divide cluster resources between multiple users, teams, applications, or environments

### provide resource quotas

### Security and access control

### Namespaces are also k8 objects

## Cluster vs Context

- **Cluster** A Kubernetes cluster is the actual running system. (all Kubernetes components.)
- **Context** it tells kubectl which cluster to talk to, with which user, and in which namespace..

## Fully Qualified Domain Name (FQDN)

- **🛑Service DNS resolution works with just the service name only if the sender and the service are in the same namespace. Otherwise, you must use the Fully Qualified Domain Name (FQDN).**

> `<service-name>.<namespace>.svc.cluster.local`
