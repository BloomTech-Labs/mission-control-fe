export const ChartDatafier = (data, additions, deletions, changedFiles) => {
    const maxValue = 1000
    data.SparkyBoy.reverse().map(commit => {
        if (commit.additions > maxValue ){
            additions.push(maxValue)
        } else {
            additions.push(commit.additions)
        }
        if (commit.deletions > maxValue ){
            deletions.push(maxValue)
        } else {
            deletions.push(commit.deletions)
        }
        if (commit.changedFiles > maxValue ){
            changedFiles.push(maxValue)
        } else {
            changedFiles.push(commit.changedFiles)
        }
        return (
            additions,
            deletions,
            changedFiles
        )
    });
}