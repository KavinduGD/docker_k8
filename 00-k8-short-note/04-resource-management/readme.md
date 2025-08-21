## labels and selector

### labels

- **metadata that helps to identify and organize object**
- **Labels do not have to be unique like names**

  ```bash
    k get pods -L app -L tier
    k get pods -l tier=frontend
    k get pods -l 'tier in (frontend)'
  ```

### selectors

- **expressions used to filter objects base on their labels**

#### two type of selectors

1. **Equality-based selectors**: Select objects based on label equality.

   ```yaml
   selector:
     matchLabels:
       app: my-app
       environment: production
       tier: backend
   ```

2. **Set-based selectors**: Select objects based on label sets. (In,NotIn)

   ```yaml
   selector:
     matchExpressions:
       - key: environment
         operator: In
         values: [production, staging]
   ```
