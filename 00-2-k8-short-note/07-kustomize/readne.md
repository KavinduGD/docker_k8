# Kustomize

- Kustomize addresses the challenges of managing configurations of similar applications for different environments, which can
  lead to a lot of duplication and overhead when using only Kubernetes-native manifests
- No templating
- Dynamically generate secrets and configmaps
- Built into kubectl

## Base and Overlays

- A **base** is a set of common YAML configurations that are shared across environments.
- **Overlays** apply environment-specific customizations on top of a base
