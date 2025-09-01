# Approches to create k8 objects

## 1. imperative with kubectl

you tell Kubernetes exactly what to do right now, like giving it a command.

```sh
kubectl run nginx --image=nginx
```

## 2. imperative with config files

You write a YAML file, then tell Kubernetes to do a specific action (like create or delete).

```sh
kubectl create -f pod.yaml
kubectl delete -f pod.yaml
kubectl replace -f pod.yaml
```

‼️ `replace` is not recommended for production use, as it can lead to unexpected behavior. Use `apply` instead.

‼️ `create` do not save our yaml definition in k8s(in annotation)

## 3.declarative with config files

This is the "best practice" style. You define the desired state in YAML files, and Kubernetes applies it, figuring out what needs to change

```sh
kubectl apply -f pod.yaml
kubectl delete -f pod.yaml
```

💯 `apply` save our yaml definition in k8s (in annotation)

## Migration from imperative to declarative

✅ If you create a object imperatively, you can still manage it declaratively later. Just use `kubectl apply` with the YAML file.

## Manage multiple objects

1. use ---
2. multiple YAML files.
