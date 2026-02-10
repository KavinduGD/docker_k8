# Docker and Kubernetes Learning Journey

## What I Learned

### Docker Fundamentals
- **Containers vs VMs**: Understanding the difference between lightweight containers and traditional virtual machines.
- **Architecture**: Docker Client, Docker Host, and Docker Daemon interaction.
- **Container Lifecycle**: Creating, starting, running, and managing container states.
- **Image Layers**: How Docker images are built in layers and how to inspect them (`docker history`).
- **Storage**:
  - **Volumes**: Managed persistence (`/var/lib/docker/volumes`), survival after container removal.
  - **Bind Mounts**: Direct mapping of host files to containers, ideal for development.
- **Networking**: Bridge, Host, None, Overlay, Macvlan, and IPvlan drivers.
- **Resource Management**: 
  - **CPU**: Limits (`--cpus`), Shares (`--cpu-shares`), Quota (`--cpu-quota`), and pinning (`--cpuset-cpus`).
  - **Memory**: Hard limits (`--memory`), Soft limits (`--memory-reservation`), and Swap (`--memory-swap`).
- **Best Practices**: Using `.dockerignore`, Multi-stage builds for smaller images, and Distroless images for security.

### Docker Compose
- **Multi-Container Apps**: Defining and running complex applications with `docker-compose.yaml`.
- **Development Workflow**: Using `watch` mode for real-time sync (superior to bind mounts) and rebuilding images (`--build`).
- **Configuration**: Environment variable management (`.env`) and composing/overriding files (`compose.override.yaml`, `include`).

### Kubernetes (K8s) Fundamentals
- **Architecture**:
  - **Control Plane (Master Node)**: The brain managing the cluster state.
  - **Worker Nodes**: Where applications and workloads actually run.
- **Minikube**: Local K8s development environment using Docker (or other drivers) to simulate a single-node cluster.
- **Deployment Models**: 
  - Imperative vs Declarative approaches.
  - Manifest files for repeatable deployments.

## Repository Structure (Notes & Projects)

### 00. Short Notes
- [00-0-docker-short-note](./00-0-docker-short-note)
- [00-1-docker-compose-short-note](./00-1-docker-compose-short-note)
- [00-2-k8-short-note](./00-2-k8-short-note)
  - [00-architecture](./00-2-k8-short-note/00-architecture)
  - [02-approches](./00-2-k8-short-note/02-approches)
  - [03-objects](./00-2-k8-short-note/03-objects)
  - [04-resource-management](./00-2-k8-short-note/04-resource-management)
  - [05-volumes](./00-2-k8-short-note/05-volumes)
  - [06-security](./00-2-k8-short-note/06-security)
  - [07-kustomize](./00-2-k8-short-note/07-kustomize)
  - [8-gke-project](./00-2-k8-short-note/8-gke-project)
- [00-slides](./00-slides)

### Docker Projects & Concepts
- [01-Containerize-an-express-app](./01-Containerize-an-express-app)
- [02-context-dockerignore](./02-context-dockerignore)
- [03-environment-variables](./03-environment-variables)
- [04-entrypoint-and-cmd](./04-entrypoint-and-cmd)
- [05-multi-stage](./05-multi-stage)
- [06-Containerize-typescript-app](./06-Containerize-typescript-app)
- [07-optimizing-images](./07-optimizing-images)
- [08-optimizing-typescript-app](./08-optimizing-typescript-app)
- [09-containerize-react-app](./09-containerize-react-app)
- [10-bind-mount](./10-bind-mount)
- [11-volumes](./11-volumes)
- [12-resource-management](./12-resource-management)
- [13-restart-policy](./13-restart-policy)
- [14-networking](./14-networking)
- [15-key-value-app](./15-key-value-app)
- [16-KTS-Dockerize](./16-KTS-Dockerize)

### Docker Compose Projects
- [17-docker-compose](./17-docker-compose)
- [18-notes-app-docker-compose](./18-notes-app-docker-compose)
- [19-KTS-Docker-Compose](./19-KTS-Docker-Compose)

### Kubernetes Projects & Concepts
- [20-k8-imperative-with-kubectl](./20-k8-imperative-with-kubectl)
- [21-k8-imperative-with-config-files](./21-k8-imperative-with-config-files)
- [22-k8-declarative-with-config-file](./22-k8-declarative-with-config-file)
- [23-replica-sets](./23-replica-sets)
- [24-deployment](./24-deployment)
- [25-services](./25-services)
- [26-KTS-k8-deployments-nodeport](./26-KTS-k8-deployments-nodeport)
- [27-resource-management](./27-resource-management)
- [28-volumes](./28-volumes)
- [29-stateful-set](./29-stateful-set)
- [30-config_maps_and_secrets](./30-config_maps_and_secrets)
- [31-deploying-mongodb](./31-deploying-mongodb)
- [32-Security](./32-Security)
- [33-kustomize](./33-kustomize)
- [34-gke-project](./34-gke-project)
- [35-ingress](./35-ingress)

## Course Resources

- **Course Link:** [Docker & Kubernetes: The Practical Guide](https://www.udemy.com/course/complete-docker-kubernetes/)
- **Certificate:** [View Certificate](https://www.udemy.com/certificate/UC-675c4847-aead-4075-b57c-97c9e6a4bcbb/)
