### 1. --cpus decimal

Simple use: - Limit the container to use at most X number of CPUs.

```bash
docker run --cpus="1.5" ubuntu
```

This means: The container can use up to 1.5 CPU cores (150% of one core).

```bash
d run --rm   busybox sh -c "while true; do :; done"
```

💡 **Interpreting 100.31%**
On a multi-core system, CPU usage can exceed 100%.

For example:

- 1 core at full usage → 100%
- 2 cores at full usage → 200%

---

### 2. --cpu-shares or -c

Relative weight — for sharing CPU between containers. It doesn't limit CPU strictly, just prioritizes.

```bash
docker run --cpu-shares=512 ubuntu
```

One container has `-c 1024`
Another has `-c 512`

Then:

- First gets 2x more CPU than the second, if they compete.
- ⚠️ Only matters when CPU is contended (fighting).

---

### 3. --cpu-period and --cpu-quota

These go together. This is how Linux kernel CFS (Completely Fair Scheduler) controls CPU usage.

`--cpu-period`: the total time window (in microseconds)

`--cpu-quota`: how much of that time the container can run

```bash
docker run \
  --cpu-period=100000 \
  --cpu-quota=25000 \
  ubuntu
```

This means:

- Every 100ms (100000 μs), the container can run for 25ms
- So the container gets 25% of 1 CPU

---

### 5. --cpuset-cpus

Let you pick which CPU cores the container can run on.

Example:

```bash
docker run --cpuset-cpus="0,2" ubuntu
```

This tells Docker:

- Run the container only on CPU core 0 and 2
