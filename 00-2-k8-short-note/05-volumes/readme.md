# Volumes

**_Volumes are directories, possibly with some data in it, which are accessible to the containers in a pod._**

## Why use Volumes?

- Containers are ephemeral, meaning that when a container crashes or is restarted, all data stored in the container's filesystem is lost. Volumes provide a way to persist data beyond the lifecycle of a single container.

## Volume Types

### 1. emptyDir

- **Ephemeral storage within the Pod**
- **Data is lost when Pod is removed**
- **All containers in the Pod can read and write the same files**

#### Use Cases

- **Sharing data between multiple containers in a Pod**

---

### 2. local

- **Mounts a file or directory from the host node's filesystem into your Pod.**
- **superseded hostPath**
- **If a pod is using that local volume, kube-scheduler will only schedule that pod to a node that has the specified local volume.** (That is defined by in configuration)
- **Only support static provisioning.** (need to create PV first)

### 3. persistentVolumeClaim

- **Persistent storage that outlives the Pod**

### 4. configMap

- **Inject configuration data into Pods**

### 5. secret

- **Inject sensitive data into Pods**

### 6. nfs, awsElasticBlockStore, azureDisk, gcePersistentDisk, etc.

- **Cloud provider or network storage solutions**
