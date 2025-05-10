# Clustering in Node.js

When a Node.js program is run, all requests, processing, and responses are handled by a single thread. This means a single process is created where one thread executes the entire Node.js application.


While this model works well for small or I/O-bound applications, it can become a bottleneck when handling a large number of requests or performing CPU-intensive tasks. That’s where clustering comes in.

Clustering is a technique that allows Node.js to take full advantage of multi-core CPUs. It works by creating a separate process for each CPU core, with each process running the same Node.js script independently. This ensures that all CPU cores are utilized, significantly improving the application’s ability to handle concurrent load.

To achieve this, a master process is created, which then forks multiple worker processes. Each worker runs the same code but handles different incoming requests, enabling parallel processing across cores.

Benchmarking without clustering

![Screenshot 2025-05-10 123710](https://github.com/user-attachments/assets/529d3aba-f729-4561-8e89-2da7270d3b78)

Benchmarking with clustering

![Screenshot 2025-05-10 124054](https://github.com/user-attachments/assets/a32127d0-0d97-43c3-9e1d-106762cc443e)
