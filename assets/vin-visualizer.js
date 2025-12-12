// VIN Breakdown Visualizer - Production JavaScript
// Uses D3.js for visualization
// Requires: app.min.js (countryMap, yearMap, validateCheckDigit, showNotification)

// VIN structure definition
const vinStructure = [
    { section: 'country', positions: [0], label: 'Country of\nmanufacture', hasTopBox: false, hasBottomBox: true, topColor: null, bottomColor: '#4CAF50' },
    { section: 'wmi', positions: [1], label: 'Vehicle\nmanufacturer', hasTopBox: true, hasBottomBox: false, topColor: '#FF5722', bottomColor: null },
    { section: 'type', positions: [2], label: 'Vehicle type\nor division', hasTopBox: false, hasBottomBox: true, topColor: null, bottomColor: '#F44336' },
    { section: 'vds', positions: [3, 4, 5, 6, 7], label: "Vehicle's brand, body style,\nengine size and type,\nmodel, series, etc.", hasTopBox: true, hasBottomBox: false, topColor: '#2196F3', bottomColor: null },
    { section: 'check', positions: [8], label: 'Security\ncheck digit', hasTopBox: false, hasBottomBox: true, topColor: null, bottomColor: '#c7b410' },
    { section: 'year', positions: [9], label: 'Model year', hasTopBox: true, hasBottomBox: false, topColor: '#009688', bottomColor: null },
    { section: 'plant', positions: [10], label: 'Assembly\nplant', hasTopBox: false, hasBottomBox: true, topColor: null, bottomColor: '#3F51B5' },
    { section: 'serial', positions: [11, 12, 13, 14, 15, 16], label: "Vehicle's production\nnumber (serial number)", hasTopBox: true, hasBottomBox: false, topColor: '#9C27B0', bottomColor: null }
];

function visualizeVIN() {
    const vin = document.getElementById('vinInput').value.toUpperCase().trim();

    gtag('event', 'vin_visualizer', {
        'event_category': 'Tool Usage',
        'event_label': 'VIN Breakdown Visualizer',
        'value': 1
    });

    // Validation
    if (vin.length === 0) {
        if (window.showNotification) window.showNotification('Please enter a VIN number', 'error');
        return;
    }

    if (vin.length !== 17) {
        if (window.showNotification) window.showNotification('VIN must be exactly 17 characters', 'error');
        return;
    }

    if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) {
        if (window.showNotification) window.showNotification('Invalid VIN format (I, O, Q not allowed)', 'error');
        return;
    }

    // Configuration
    const charWidth = 60;
    const charHeight = 80;
    const charGap = 8;
    const groupGap = 30;
    const boxHeight = 80;
    const lineLength = 100;

    // Calculate positions
    let currentX = 0;
    const groups = vinStructure.map(group => {
        const startX = currentX;
        const width = (group.positions.length * charWidth) + ((group.positions.length - 1) * charGap);
        const centerX = startX + width / 2;
        currentX += width + groupGap;

        return {
            ...group,
            startX,
            width,
            centerX,
            chars: group.positions.map((pos, i) => ({
                char: vin[pos],
                x: startX + (i * (charWidth + charGap)),
                position: pos
            }))
        };
    });

    const totalWidth = currentX - groupGap;
    const centerY = 400;
    const svgWidth = Math.max(totalWidth + 100, 1200);
    const svgHeight = 800;
    const offsetX = (svgWidth - totalWidth) / 2;

    // Clear previous
    d3.select('#vinVisualization').selectAll('*').remove();

    // Create SVG
    const svg = d3.select('#vinVisualization')
        .append('svg')
        .attr('id', 'vinSvg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    // Draw each group
    groups.forEach(group => {
        const g = svg.append('g')
            .attr('class', `group-${group.section}`)
            .attr('transform', `translate(${offsetX}, 0)`);

        // Top Box
        if (group.hasTopBox) {
            const boxY = centerY - charHeight/2 - lineLength - boxHeight;

            // Connecting line
            g.append('line')
                .attr('class', 'connecting-line')
                .attr('x1', group.centerX)
                .attr('y1', boxY + boxHeight)
                .attr('x2', group.centerX)
                .attr('y2', centerY - charHeight/2 - 8)
                .attr('stroke', group.topColor);

            // Box
            const boxWidth = Math.min(Math.max(group.width, 120), 200);
            const boxG = g.append('g')
                .attr('class', 'info-box')
                .attr('data-section', group.section)
                .style('cursor', 'pointer');

            boxG.append('rect')
                .attr('class', 'info-box-rect')
                .attr('x', group.centerX - boxWidth/2)
                .attr('y', boxY)
                .attr('width', boxWidth)
                .attr('height', boxHeight)
                .attr('rx', 10)
                .attr('fill', group.topColor);

            // Box label
            const lines = group.label.split('\n');
            lines.forEach((line, i) => {
                boxG.append('text')
                    .attr('class', 'info-box-label')
                    .attr('x', group.centerX)
                    .attr('y', boxY + 15 + (i * 12))
                    .attr('text-anchor', 'middle')
                    .text(line);
            });

            // Box value
            let value = '';
            if (group.section === 'wmi') value = vin[1];
            else if (group.section === 'vds') value = vin.substring(3, 8);
            else if (group.section === 'year') {
                const years = window.yearMap ? window.yearMap[vin[9]] : null;
                value = years ? `${years[0]}/${years[1]}` : vin[9];
            }
            else if (group.section === 'serial') value = vin.substring(10, 17);

            boxG.append('text')
                .attr('class', 'info-box-value')
                .attr('x', group.centerX)
                .attr('y', boxY + boxHeight - 15)
                .attr('text-anchor', 'middle')
                .text(value);

            // Top underline
            g.append('line')
                .attr('class', 'underline')
                .attr('x1', group.startX)
                .attr('y1', centerY - charHeight/2 - 8)
                .attr('x2', group.startX + group.width)
                .attr('y2', centerY - charHeight/2 - 8)
                .attr('stroke', group.topColor);
        }

        // Bottom Box
        if (group.hasBottomBox) {
            const boxY = centerY + charHeight/2 + lineLength;

            // Connecting line
            g.append('line')
                .attr('class', 'connecting-line')
                .attr('x1', group.centerX)
                .attr('y1', centerY + charHeight/2 + 8)
                .attr('x2', group.centerX)
                .attr('y2', boxY)
                .attr('stroke', group.bottomColor);

            // Box
            const boxWidth = Math.min(Math.max(group.width, 120), 180);
            const boxG = g.append('g')
                .attr('class', 'info-box')
                .attr('data-section', group.section)
                .style('cursor', 'pointer');

            boxG.append('rect')
                .attr('class', 'info-box-rect')
                .attr('x', group.centerX - boxWidth/2)
                .attr('y', boxY)
                .attr('width', boxWidth)
                .attr('height', boxHeight)
                .attr('rx', 10)
                .attr('fill', group.bottomColor);

            // Box label
            const lines = group.label.split('\n');
            lines.forEach((line, i) => {
                boxG.append('text')
                    .attr('class', 'info-box-label')
                    .attr('x', group.centerX)
                    .attr('y', boxY + 15 + (i * 12))
                    .attr('text-anchor', 'middle')
                    .text(line);
            });

            // Box value
            let value = '';
            if (group.section === 'country') value = window.countryMap ? (window.countryMap[vin[0]] || 'Unknown') : vin[0];
            else if (group.section === 'type') value = `Type: ${vin[2]}`;
            else if (group.section === 'check') value = vin[8];
            else if (group.section === 'plant') value = vin[10];

            boxG.append('text')
                .attr('class', 'info-box-value')
                .attr('x', group.centerX)
                .attr('y', boxY + boxHeight - 15)
                .attr('text-anchor', 'middle')
                .text(value);

            // Bottom underline
            g.append('line')
                .attr('class', 'underline')
                .attr('x1', group.startX)
                .attr('y1', centerY + charHeight/2 + 8)
                .attr('x2', group.startX + group.width)
                .attr('y2', centerY + charHeight/2 + 8)
                .attr('stroke', group.bottomColor);
        }

        // VIN Characters
        group.chars.forEach(charData => {
            const charG = g.append('g')
                .attr('class', 'vin-char-group')
                .attr('data-section', group.section)
                .style('cursor', 'pointer');

            charG.append('rect')
                .attr('class', 'vin-char-rect')
                .attr('x', charData.x)
                .attr('y', centerY - charHeight/2)
                .attr('width', charWidth)
                .attr('height', charHeight)
                .attr('rx', 4)
                .attr('fill', '#333');

            charG.append('text')
                .attr('class', 'vin-char-text')
                .attr('x', charData.x + charWidth/2)
                .attr('y', centerY + 12)
                .attr('text-anchor', 'middle')
                .text(charData.char);
        });
    });

    // Hover interactions
    svg.selectAll('.info-box, .vin-char-group')
        .on('mouseenter', function() {
            const section = d3.select(this).attr('data-section');
            svg.selectAll(`[data-section="${section}"]`).classed('highlight', true);
        })
        .on('mouseleave', function() {
            svg.selectAll('.highlight').classed('highlight', false);
        });

    // Show visualization
    document.getElementById('vinVisualization').style.display = 'block';

    if (window.showNotification) {
        window.showNotification('VIN visualization complete!', 'success');
    }

    setTimeout(() => {
        document.getElementById('vinVisualization').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function clearVisualization() {
    // Clear input
    document.getElementById('vinInput').value = '';

    // Hide visualization
    const vizContainer = document.getElementById('vinVisualization');
    if (vizContainer) {
        vizContainer.style.display = 'none';
    }

    // Clear SVG
    d3.select('#vinVisualization').selectAll('*').remove();
}

// Enter key support
document.addEventListener('DOMContentLoaded', function() {
    const vinInput = document.getElementById('vinInput');
    if (vinInput) {
        vinInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') visualizeVIN();
        });
    }
});