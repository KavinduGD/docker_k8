### 🧱 1. --memory or -m → Set a hard limit

This is the maximum amount of memory the container can use.

```bash
docker run -m 512m ubuntu
```

⏹️ If the container uses more than 512 MB, it gets killed.

---

### 2. --memory-reservation → Set a soft limit

This is a warning threshold. Docker starts trying to slow memory use if it goes above this value.

```bash
docker run \
  --memory=1g \
  --memory-reservation=600m \
  ubuntu
```

🟡 **Meaning:**
- Start controlling memory usage after 600 MB
- But hard stop at 1 GB

---

### 3. --memory-swap

This defines the total amount of memory + swap the container can use.

```bash
docker run --memory=1g --memory-swap=2g ubuntu
```

🧠 **That container can:**
- Use up to 1 GB RAM
- And 1 GB extra swap memory  (swap memory - memory in hard drive)
- This will slow the container
